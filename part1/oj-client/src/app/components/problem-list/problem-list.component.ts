import { Component, OnInit } from '@angular/core';
import { Problem } from "../../models/problem.model";

const PROBLEMS: Problem[] = [{
  id: 1,
  name: "two sum",
  desc: "a leetcode problem called 2 sum",
  difficulty: "easy",
}]
@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})

export class ProblemListComponent implements OnInit {

  problems: Problem[];

  constructor() { }

  ngOnInit() {
    this.problems = PROBLEMS;
  }

}
