import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";

class Box1 extends StatelessWidget {
  final title;
  Box1(@required this.title);
  @override
  Widget build(BuildContext context) {
    return Container(
      child: ClipRRect(
        borderRadius: BorderRadius.circular(25),
              child: Card(
          
          elevation: 10,
          color: Colors.yellow,
          child: Center(
            child: Text(title,style: GoogleFonts.pacifico(fontSize:25,),),
          ),
        ),
      ),
    );
  }
}
