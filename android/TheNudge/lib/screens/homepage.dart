// import 'dart:html';

import 'package:cloud_firestore/cloud_firestore.dart';
import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:firebase_auth/firebase_auth.dart";
import "package:TheNudge/screens/textform.dart";

class HomePage extends StatefulWidget {
  final String uid;
  HomePage(this.uid);
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  
  @override
  Widget build(BuildContext context) {
    
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "The Nudge Foundation",
          // style: GoogleFonts.comicNeue(fontSize: 20),
        ),
        // backgroundColor: Colors.black,
      ),
     
      body: Center(
        child:Text("welcome"),
      ),

      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add_box),
        onPressed: () {
          // Navigator.of(context).pushNamed(TextForm.routename);
        },
      ),
    );
  }
}

