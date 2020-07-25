import 'package:Nudge/screens/profile.dart';
import 'package:Nudge/screens/timetable.dart';
import "package:flutter/material.dart";
import "package:Nudge/data/list.dart";
import "package:url_launcher/url_launcher.dart";
import "package:google_fonts/google_fonts.dart";
import "package:Nudge/data/globals.dart" as global;

class ImageScreen extends StatelessWidget {
  final String url;
  var listc = SList.h.toList();
  ImageScreen(this.url);

  @override
  Widget build(BuildContext context) {
    if(url=="https://www.npg.org.uk/assets/images/Slideshows/Jobs/568_Staff.jpg")
      return Scaffold(
        backgroundColor: Colors.black87,
        appBar: AppBar(
          title: Text("Nudge"),
        ),
        body: Container(
          padding: EdgeInsets.all(20),
          child: GridView.builder(
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 2,
              crossAxisSpacing: 8.0,
              mainAxisSpacing: 10.0,
            ),
            itemBuilder: (BuildContext context, int index) {
              // print(listc[index]["image"]);
              return Padding(
                padding:EdgeInsets.all(10),
                              child: Column(
                  // mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Flexible(
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(30),
                        child: Center(
                          child: Material(
                            elevation: 80,
                            child: Container(
                              // decoration: BoxDecoration(
                              //   border: Border.all(color: Colors.black87, width: 5),
                              // ),
                              height: MediaQuery.of(context).size.height / 3,
                              //child: Center(

                              //child:Material(elevation: 10,
                              //child:
                              child: InkWell(
                                onTap: () => launch(listc[index]["url"]),
                                child: Image(
                                  height: MediaQuery.of(context).size.height/4,
                                  image: NetworkImage(
                                    
                                    listc[index]["image"],
                                  ),
                                ),
                              ),
                              // ),
                              // ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    // Padding(
                    //   padding: EdgeInsets.all(10),
                    // ),
                    Row(children: <Widget>[
                    Icon(Icons.favorite,color: Colors.yellow,),
                    Padding(padding: EdgeInsets.only(right: 5),),
                    Text(
                      listc[index]["title"],
                      style: GoogleFonts.pacifico(
                        fontSize: 20,
                        color: Colors.white,

                        // ),
                      ),
                    ),
                    ])
                  ],
                ),
              );
            },
            itemCount: SList.h.length,
          ),
        ),
      );
      else if(url=="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg")
      return UserProfilePage();
      else if (url=="https://i.pinimg.com/originals/f4/26/90/f4269058bffae58474f816f8613b7a60.png")
      return Box(global.title);
    
    }
  

}