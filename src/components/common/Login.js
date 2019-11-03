state = { loggedIn: null };
    componentDidMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyDnvVaVeo3nYYfhIbha6CxwvoOyB4Bar70',
        authDomain: 'testalbum-6c45f.firebaseapp.com',
        databaseURL: 'https://testalbum-6c45f.firebaseio.com',
        projectId: 'testalbum-6c45f',
        storageBucket: 'testalbum-6c45f.appspot.com',
        messagingSenderId: '290461871479',
        appId: '1:290461871479:web:4d47b91f04c681e5fb8572',
      });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
        });
    }
    
    renderContent() {
      switch (this.state.loggedIn) {
        case true:
            return (<Button onPress={() => firebase.auth().signOut()}>
                    Log Out
            </Button>);
        case false:
            return <LoginForm />;
        default:
            return <Spinner />;
      }
    }