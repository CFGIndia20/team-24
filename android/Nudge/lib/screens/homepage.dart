// import "package:flutter/material.dart";
// import 'package:carousel_slider/carousel_slider.dart';

// class MyHomePage extends StatefulWidget {
//   MyHomePage({Key key, this.title}) : super(key: key);
//   final String title;

//   @override
//   _MyHomePageState createState() => _MyHomePageState();
// }

// class _MyHomePageState extends State<MyHomePage> {
//   List<String> imageLinks = [
//     'https://homepages.cae.wisc.edu/~ece533/images/fruits.png',
//     'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
//     'https://homepages.cae.wisc.edu/~ece533/images/peppers.png',
//     'https://homepages.cae.wisc.edu/~ece533/images/tulips.png'
//   ];

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text(widget.title),
//       ),
//       body: Center(
//         child: Column(
//           mainAxisAlignment: MainAxisAlignment.center,
//           children: <Widget>[
//             CarouselSlider(
//               height: 400.0,
//               items: imageLinks.map((imageLink) {
//                 return Builder(
//                   builder: (BuildContext context) {
//                     return Container(
//                         width: MediaQuery.of(context).size.width,
//                         margin: EdgeInsets.symmetric(horizontal: 5.0),
//                         child: Image.network(
//                           imageLink,
//                           fit: BoxFit.cover,
//                         ));
//                   },
//                 );
//               }).toList(),

//               reverse:
//                   false, //is false by default (reverses the order of items)
//               enableInfiniteScroll:
//                   true, //is true by default (it scrolls back to item 1 after the last item)
//               autoPlay: true, //is false by default
//               initialPage:
//                   0, //allows you to set the first item to be displayed
//               scrollDirection: Axis.horizontal, //can be set to Axis.vertical
//               pauseAutoPlayOnTouch: Duration(
//                   seconds: 5), //it pauses the sliding if carousel is touched,
//               onPageChanged: (int pageNumber) {
//                 //this triggers everytime a slide changes
//               },
//               viewportFraction: 0.8,
//               enlargeCenterPage: true, //is false by default
//               aspectRatio:
//                   16 / 9, //if height is not specified, then this value is used
//             )
//           ]
//         )
//       )
//     );
//   }
// }



import "package:flutter/material.dart";
import "package:carousel_slider/carousel_slider.dart";
import "package:google_fonts/google_fonts.dart";
import "package:Nudge/data/list.dart";
import "package:Nudge/screens/imagescreen.dart";



class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<String> shoplist = [
    'https://homepages.cae.wisc.edu/~ece533/images/fruits.png',
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black87,
        appBar: AppBar(
          title: Text("OneStop"),
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
