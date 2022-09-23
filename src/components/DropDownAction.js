import React from 'react';
import _ from 'lodash';

import { Link, withPrefix, classNames } from '../utils';
import Icon from './Icon';
import Action from './Action';

export default class DropDownAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            width: 0,
            dropdown: false
        };
    }

    autoResize = () => {
        let width = window.innerWidth;

        if (width < 800) {
            this.setState({
                width: width,
                dropdown: true
            });
        } else {
            this.setState({
                width: width,
                dropdown: false
            });
        }
    };

    componentDidMount = () => {
        window.addEventListener('resize', this.autoResize);
        this.autoResize();
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.autoResize);
    };

    render() {
        const action = _.get(this.props, 'action');
        const pageUrl = _.get(this.props, 'pageUrl');
        const url = _.get(action, 'url');
        const label = _.get(action, 'label');
        const style = _.get(action, 'style', 'link');
        const list = _.get(action, 'list');
        const icon = 'arrow-down';

        return (
            <>
                <Link className={''} style={{ position: 'relative', zIndex: 5, fontWeight: 400 }}>
                    <React.Fragment>
                        <span className={'dropdown-label'} onClick={() => this.setState({ showPopup: !this.state.showPopup })}>
                            {label}
                        </span>
                        <Icon icon={icon} />
                    </React.Fragment>

                    {this.state.showPopup && !this.state.dropdown && (
                        <div className="custom-menu-dropdown">
                            <ul className="menu items-md-center">
                                {list.map((action, i) => {
                                    const actionUrl = _.trim(_.get(action, 'url'), '/');
                                    const actionStyle = _.get(action, 'style', 'link');
                                    const breakLine = _.get(action, 'break');

                                    return (
                                        <li
                                            key={i}
                                            className={classNames({
                                                'is-active': pageUrl === actionUrl && actionStyle === 'link',
                                                'menu__item-btn': actionStyle !== 'link'
                                            })}
                                        >
                                            <Action action={action} />
                                            {/* {breakLine==true&&(<hr />)} */}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </Link>
                {this.state.showPopup && this.state.dropdown && (
                    <ul className="menu flex-md items-md-center">
                        {list.map((action, index) => {
                            const actionUrl = _.trim(_.get(action, 'url'), '/');
                            const actionStyle = _.get(action, 'style', 'link');
                            return (
                                <li
                                    key={index}
                                    className={classNames('menu__item', 'ml-md-3', {
                                        'is-active': pageUrl === actionUrl && actionStyle === 'link',
                                        'menu__item-btn': actionStyle !== 'link'
                                    })}
                                >
                                    {<Action action={action} />}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </>
        );
    }
}
