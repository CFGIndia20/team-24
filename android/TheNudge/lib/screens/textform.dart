import "package:flutter/material.dart";
import "package:cloud_firestore/cloud_firestore.dart";
import "package:firebase_auth/firebase_auth.dart";
class TextForm extends StatefulWidget {
  static const routename = "/homepage";

  @override
  _TextFormState createState() => _TextFormState();
}

class _TextFormState extends State<TextForm> {
  String text = "";
  String url = "";
  String title = "";
  int uid;
  final _formkey = GlobalKey<FormState>();
  TextEditingController titlec=new TextEditingController();
  TextEditingController urlc=new TextEditingController();
  TextEditingController textc=new TextEditingController();

  initState(){
    titlec=new TextEditingController();
 urlc=new TextEditingController();
  textc=new TextEditingController();
  super.initState();
  }

  Future<void> _saveform(
      String text, String url, String title, String notes) async {
    _formkey.currentState.save();
    try {
      final user=await FirebaseAuth.instance.currentUser();
      // _formkey.currentState.save();
      await Firestore.instance.collection("users").document(user.uid).collection("notes").add(
        {
          "notes": notes,
          "title": titlec.text,
          "text": textc.text,
          "urls": urlc.text,
        },
      );
    } catch (e) {
      print(e.message);
      showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            content: Text("Something went wrong"),
            title: Text("An error occured"),
            actions: <Widget>[
              FlatButton(
                child: Text("Okay"),
                onPressed: () {
                  Navigator.of(context).pop();
                },
              )
            ],
          );
        },
      );
    }
    textc.clear();
    urlc.clear();
    titlec.clear();
    Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(),
        body: Card(
          color: Colors.green[50],
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20),
          ),
          elevation: 10,
          child: SingleChildScrollView(
            child: Column(
              children: <Widget>[
                Form(
                  key: _formkey,
                  child: SingleChildScrollView(
                    child: Column(
                      children: <Widget>[
                        TextFormField(
                          decoration: InputDecoration(labelText: "Title"),
                          controller: titlec,
                          onSaved: (value) {
                            title = value;
                          },
                        ),
                        TextFormField(
                          decoration: InputDecoration(labelText: "Notes"),
                          maxLines: 10,
                          controller:textc,
                          keyboardType: TextInputType.multiline,
                          onSaved: (value) {
                            text = value;
                          },
                        ),
                        TextFormField(
                          decoration: InputDecoration(labelText: "Links"),
                          maxLines: 10,
                          controller:urlc ,
                          keyboardType: TextInputType.multiline,
                          onSaved: (value) {
                            url = value;
                          },
                          onFieldSubmitted: (_) {
                            print("saved");
                          },
                        ),
                        Padding(
                          padding: EdgeInsets.all(15),
                        ),
                        Center(
                          child: FloatingActionButton(
                            elevation: 10,
                            child: Icon(Icons.assignment_turned_in),
                            onPressed: () =>
                                _saveform(text, url, title, "notes"),
                          ),
                        )
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ));
  }
}
