import 'package:Nudge/screens/jobs.dart';
import 'package:Nudge/screens/profile.dart';
import 'package:Nudge/screens/timetable.dart';
import 'package:Nudge/widgets/box.dart';
import "package:flutter/material.dart";
import "package:Nudge/data/list.dart";

import "package:Nudge/data/globals.dart" as global;


class ImageScreen extends StatelessWidget {
  final String url;
  var listc = SList.h.toList();
  ImageScreen(this.url);

  @override
  Widget build(BuildContext context) {
    if (url ==
        "https://previews.123rf.com/images/fizkes/fizkes1802/fizkes180200374/95308921-two-diverse-young-businessmen-talking-discussing-new-project-idea-caucasian-hr-holding-job-interview.jpg")
      return Box1("Job");
    else if (url ==
        "https://thumbs.dreamstime.com/b/young-woman-adult-student-autumn-back-to-school-park-going-university-college-asian-girl-smiling-happy-pretty-mixed-race-32608952.jpg")
      return UserProfilePage();
    else if (url ==
        "https://i.pinimg.com/originals/f4/26/90/f4269058bffae58474f816f8613b7a60.png")
      return Box(global.title);
  }
}
//implementing the different routes for each element of carousel
