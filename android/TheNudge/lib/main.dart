
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
import "screens/homepage.dart";

void main() => runApp(
    MaterialApp(debugShowCheckedModeBanner: false, home: LoginPageWidget()));

class LoginPageWidget extends StatefulWidget {
  @override
  LoginPageWidgetState createState() => LoginPageWidgetState();
}

class LoginPageWidgetState extends State<LoginPageWidget> {
  final GoogleSignIn _googleSignIn = GoogleSignIn();
  final FirebaseAuth _auth = FirebaseAuth.instance;
  bool isUserSignedIn = false;
  String username = "";
  String picurl = "";

  @override
  void initState() {
    super.initState();

    checkIfUserIsSignedIn();
  }

  void checkIfUserIsSignedIn() async {
    var userSignedIn = await _googleSignIn.isSignedIn();

    setState(() async {
      isUserSignedIn = userSignedIn;
      if (isUserSignedIn == true) {
        FirebaseUser user = await FirebaseAuth.instance.currentUser();
        username = user.displayName;
        picurl = user.photoUrl;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Scaffold(
        body: Container(
          padding: EdgeInsets.all(50),
          child: Align(
            alignment: Alignment.center,
            child: Center(
              child: Column(children: <Widget>[
                if (isUserSignedIn)
                  Container(
                    width: 200,
                    height: 200,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      image: DecorationImage(
                          image: NetworkImage(picurl), fit: BoxFit.fill),
                    ),
                  ),
                Padding(
                  padding: EdgeInsets.only(
                    bottom: 50,
                  ),
                ),
                Center(
                  child: FlatButton(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20),
                    ),
                    onPressed: () {
                      onGoogleSignIn(context);
                    },
                    color: isUserSignedIn ? Colors.green : Colors.blueAccent,
                    child: Padding(
                      padding: EdgeInsets.all(10),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: <Widget>[
                          Icon(Icons.account_circle, color: Colors.white),
                          SizedBox(width: 10),
                          Text(
                            isUserSignedIn
                                ? 'Welcome $username'
                                : 'Login with Google',
                            style: TextStyle(color: Colors.white),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                if (isUserSignedIn)
                  Column(children: <Widget>[
                    Padding(
                      padding: EdgeInsets.all(20),
                    ),
                    FlatButton(
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(20),
                      ),
                      color: Colors.red,
                      textColor: Colors.white,
                      child: Padding(
                        padding: EdgeInsets.all(10),
                        child: Text("SignOut"),
                      ),
                      onLongPress: () async {
                        await FirebaseAuth.instance.signOut();
                        
                      },
                    ),
                  ])
              ]),
            ),
          ),
        ),
      ),
    );
  }

  Future<FirebaseUser> _handleSignIn() async {
    FirebaseUser user;
    bool userSignedIn = await _googleSignIn.isSignedIn();

    setState(() {
      isUserSignedIn = userSignedIn;
    });

    if (isUserSignedIn) {
      user = await _auth.currentUser();
    } else {
      final GoogleSignInAccount googleUser = await _googleSignIn.signIn();
      final GoogleSignInAuthentication googleAuth =
          await googleUser.authentication;

      final AuthCredential credential = GoogleAuthProvider.getCredential(
        accessToken: googleAuth.accessToken,
        idToken: googleAuth.idToken,
      );

      user = (await _auth.signInWithCredential(credential)).user;
      userSignedIn = await _googleSignIn.isSignedIn();
      setState(() {
        isUserSignedIn = userSignedIn;
      });
    }

    return user;
  }

  void onGoogleSignIn(BuildContext context) async {
    FirebaseUser user = await _handleSignIn();
    var user1 = await FirebaseAuth.instance.currentUser();
    String uid = user1.uid;
    var userSignedIn = await Navigator.push(
      context,
      MaterialPageRoute(builder: (context) {
        return WelcomeUserWidget(user, _googleSignIn, uid);
      }),
    );

    setState(() {
      isUserSignedIn = userSignedIn == null ? true : false;
    });
  }
}

class WelcomeUserWidget extends StatelessWidget {
  GoogleSignIn _googleSignIn;
  FirebaseUser _user;
  String _uid;

  WelcomeUserWidget(FirebaseUser user, GoogleSignIn signIn, String uid) {
    _user = user;
    _googleSignIn = signIn;
    _uid = uid;
  }

  @override
  Widget build(BuildContext context) {
    return HomePage(_uid);
   
  }
}
