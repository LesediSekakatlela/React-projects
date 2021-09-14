import React from "react";

class GoogleAuth extends React.Component {
componentDidMount () {
    window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
            clientId:'872209274452-0e9bnfk2ujrthbe55g4ojqv54rcatnkd.apps.googleusercontent.com',
            scope: 'email'
        });
    });
}

    render() {
        return <div>GoogleAuth</div>;
    }
}

export default GoogleAuth;