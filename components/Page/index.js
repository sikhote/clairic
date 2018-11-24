import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import { isBrowser, getLocale } from 'parlor';
import makeStore from '../../lib/makeStore';
import translations from '../../lib/translations';
import { cloudGet } from '../../actions/cloud';
import Navigation from '../Navigation';
import Player from '../Player';
import styles from './styles';

if (isBrowser) {
	addLocaleData(en);
}

class Page extends React.PureComponent {
	componentDidMount() {
		this.tryCloudGet();
	}

	tryCloudGet() {
		const {
			store: { dispatch, getState },
		} = this.props;
		const {
			settings: {
				cloud: { key, path, isConnected },
			},
		} = getState();

		if (!isConnected && key && path) {
			dispatch(cloudGet());
		}
	}

	render() {
		const { children, store } = this.props;
		const messages = translations[getLocale()];
		const now = Date.now();

		return (
			<ReduxProvider store={store}>
				<IntlProvider
					locale={getLocale()}
					messages={messages}
					initialNow={now}
					textComponent={React.Fragment}
				>
					<div className="container">
						<style jsx>{styles}</style>
						<Player />
						<Navigation />
						<div className="main">{children}</div>
					</div>
				</IntlProvider>
			</ReduxProvider>
		);
	}
}

Page.propTypes = {
	children: PropTypes.any.isRequired,
	store: PropTypes.object.isRequired,
};

export default withRedux(makeStore)(Page);