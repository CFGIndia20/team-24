import "package:flutter/material.dart";
import "package:carousel_slider/carousel_slider.dart";
import "package:google_fonts/google_fonts.dart";
import "package:Nudge/data/list.dart";
import "package:Nudge/screens/imagescreen.dart";
import "package:Nudge/data/list.dart";
import "package:Nudge/data/globals.dart" as global;

class HomePage extends StatefulWidget {
  // String emailid;
  // HomePage(this.emailid);
  static const routename="/homepage";
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
 
  @override
  Widget build(BuildContext context) {
      // final User user = ModalRoute.of(context).settings.arguments;
  
    return Scaffold(
      backgroundColor: Colors.black87,
        appBar: AppBar(
          title: Text("Nudge"),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              CarouselSlider(
                height: MediaQuery.of(context).size.height*0.85,
                items: SList.list.map((link) {
                  return Builder(builder: (BuildContext context) {
                    return Container(
                        width: MediaQuery.of(context).size.width,
                        margin: EdgeInsets.symmetric(horizontal: 5.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            ClipRRect(
                              borderRadius: BorderRadius.circular(20),
                              child: GestureDetector(
                                child: Image.network(link, fit: BoxFit.cover),
                                onTap: (){
                                  print(global.emailid);
                                  Navigator.push<Widget>(context,MaterialPageRoute(
                                    builder: (context)=>ImageScreen(link),
                                  ),
                                  );
                                },
                              ),
                            ),
                            Expanded(
                              child: Padding(
                                padding: EdgeInsets.symmetric(
                                  vertical: 10,
                                  horizontal: 20,
                                ),
                                child: GestureDetector(
                                                                  child: Text(
                                    SList.listtitle[link],
                                    style: GoogleFonts.pacifico(
                                      fontSize: 40,
                                      color: Colors.white,
                                    ),
                                    
                                  ),
                                  onTap: (){
                                  Navigator.push<Widget>(context,MaterialPageRoute(
                                    builder: (context)=>ImageScreen(link),
                                  ),
                                  );
                                  }
                                )
                              ),
                            )
                          ],
                        )
                        // child: Card(
                        //     elevation: 10,
                        // child: Stack(
                        //   children: <Widget>[

                        // child: ClipRRect(
                        //   borderRadius: BorderRadius.circular(20),
                        //   child: Image.network(link, fit: BoxFit.cover),
                        // )

                        //  ],),

                        //   ],
                        // ),
                        // ),
                        );
                  });
                }).toList(),
                enableInfiniteScroll: true,
                autoPlay: true,
                initialPage: 0,
                scrollDirection: Axis.horizontal,
                pauseAutoPlayOnTouch: Duration(seconds: 5),
                viewportFraction: 0.8,
                enlargeCenterPage: true,
                aspectRatio: 16 / 9,
              )
            ],
          ),
        ));
  }
}

// class User {
//   final String userName;
//   final String password;
 
//   User(this.userName, this.password);
// }