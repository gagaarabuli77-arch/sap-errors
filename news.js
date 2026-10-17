// ===== NEWS FEED =====
// Posts show at the top of the site from "date" for "days" days, then hide by themselves.
//
// To add a post, copy this block to the top of the list (keep the comma after "}"):
//
//  {
//   "date": "2026-10-20",            // year-month-day the post appears
//   "days": 5,                       // how many days it stays up
//   "text": "რა შეიცვალა SAP-ში ...",   // the post itself
//   "instruction": "tires-trade-in"  // optional: id of a guide in instructions.js
//  },
//
// Watch out: every line inside { } needs its quotes, and lines end with a comma
// (except the last one). One missing quote or comma and the page goes blank.
const NEWS = [
 {
  "date": "2026-10-17",
  "days": 5,
  "text": "15 ოქტომბრიდან მოქმედებს საბურავების Trade In აქცია 4 ფილიალში: ცენტრალური, ბათუმი, ქუთაისი და ვაკე. საბურავების ჩაბარება ხდება იმავე პრინციპით, როგორც აკუმულატორის ჩაბარება.",
  "instruction": "tires-trade-in"
 }
];
