import {useNavigate} from "react-router-dom";
import React, {Component} from "react";
import AuthService from "../services/auth.service";


import UserServices from "../services/user.services";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }

    componentDidMount() {
        UserServices.getPublicContent().then(
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    content:
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString()
                });
            }
        );
    }

    render() {
        return (
            <div>
                <h1>home</h1>
            </div>
        );
    }
}
