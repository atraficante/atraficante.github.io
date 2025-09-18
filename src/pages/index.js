import React, { Component } from 'react';

import Layout from '@theme/Layout';
import Video from '@site/src/components/Video.jsx';
import styles from './index.module.css'; // We'll define styles here

class Content extends Component {

    componentDidMount() {
        const navbar = document.querySelector('nav.navbar');
        if (navbar) {
            navbar.classList.add(styles.navbarOverlay);

            this.navbarObserver = new MutationObserver(() => {
                if (!navbar.classList.contains(styles.navbarOverlay)) {
                    navbar.classList.add(styles.navbarOverlay);
                }
            });

            this.navbarObserver.observe(navbar, { attributes: true, attributeFilter: ['class'] });
        }
    }

    componentWillUnmount() {
        const navbar = document.querySelector('nav.navbar');
        if (navbar) {
            navbar.classList.remove(styles.navbarOverlay);
        }
        if (this.navbarObserver) {
            this.navbarObserver.disconnect();
        }
    }

    render() {
        return (
            <Layout>
                <Video />

            </Layout>
        );
    }
}

export default Content;