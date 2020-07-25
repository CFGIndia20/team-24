// import 'dart:html';

import 'package:cloud_firestore/cloud_firestore.dart';
import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";

import "package:firebase_auth/firebase_auth.dart";

class HS extends StatefulWidget {
  final String uid;
  HS(this.uid);
  @override
  _HSState createState() => _HSState();
}

class _HSState extends State<HS> {
  
  @override
  Widget build(BuildContext context) {
    
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Sticky Notes",
          // style: GoogleFonts.comicNeue(fontSize: 20),
        ),
        // backgroundColor: Colors.black,
      ),
      // body: StreamBuilder<QuerySnapshot> (
              

      //     stream: Firestore.instance.collection("users").document().collection(widget.uid).snapshots(),
          // builder: (BuildContext context,AsyncSnapshot<QuerySnapshot> snapshot) {
          //   if (!snapshot.hasData)
          //     return CircularProgressIndicator();
          //   else
          //     // return Column(children: <Widget>[
          //     return Padding(
          //       padding: EdgeInsets.all(10),
          //       child: GridView.builder(
          //         gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          //           crossAxisCount: 2,
          //           crossAxisSpacing: 8.0,
          //           mainAxisSpacing: 10.0,
          //         ),
          //         itemBuilder: (BuildContext context, int index) {
          //           return GestureDetector(
          //             child: Box(
          //               snapshot.data.documents[index]["title"],
          //             ),
          //             onTap: ()async {
          //                     final user=await FirebaseAuth.instance.currentUser();

          //               Navigator.of(context).pushReplacementNamed(
          //                 DetailedNotes.routename,arguments:DN(snapshot.data.documents[index]["title"],
          //                 snapshot.data.documents[index]["urls"],
          //                 snapshot.data.documents[index]["text"],
          //                 snapshot.data.documents[index][user.uid],
          //                 ));
          //             },
          //           );
          //         },
          //         itemCount: snapshot.data.documents.length,
          //       ),
              // );
            // GridTileBar(
            //   backgroundColor: Colors.black87,
            //   leading: IconButton(
            //     icon: Icon(
            //       Icons.favorite,
            //       color: Colors.yellow,
            //     ),
            //     onPressed: null,
            //   ),
            // )
            // ]);
            //     return GridView.builder(
            //       gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            //         crossAxisCount: 2,
            //         crossAxisSpacing: 8.0,
            //         mainAxisSpacing: 10.0,
            //       ),
            //       itemBuilder: snapshot.data.documents.map(
            //         (DocumentSnapshot document) {
            //           return ListTile(
            //             title: Text(document["title"]),
            //             // subtitle:Text(document[""])
            //           );
            //         },
            //       ).toList(),
            //     );
          // }),
      // ),
      body: Center(
        child: Container(
            padding: const EdgeInsets.all(20.0),
            child: StreamBuilder<QuerySnapshot>(
              stream: Firestore.instance
                  .collection("student")
                  .snapshots(),
              builder: (BuildContext context,
                  AsyncSnapshot<QuerySnapshot> snapshot) {
                if (snapshot.hasError)
                  return new Text('Error: ${snapshot.error}');
                switch (snapshot.connectionState) {
                  case ConnectionState.waiting:
                    return new Text('Loading...');
                  default:
                    return new ListView(
                      children: snapshot.data.documents
                          .map((DocumentSnapshot document) {
                        return new Text(
                        //  document[''],
                        "Hello"
                          // description: document['description'],
                        );
                      }).toList(),
                    );
                }
              },
            )),
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

