import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
        this.initializeCustomScripts();
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }

  private initializeCustomScripts() {
    $("#menu-toggle").click(function(this: HTMLElement, e: Event) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    $("#menu-toggle-2").click(function(this: HTMLElement, e: Event) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled-2");
      $('#menu ul').hide();
    });

    function initMenu() {
      $('#menu ul').hide();
      $('#menu ul').children('.current').parent().show();
      $('#menu li a').click(function(this: HTMLElement) {
        var checkElement = $(this).next();
        if (checkElement.is('ul') && checkElement.is(':visible')) {
          return false;
        }
        if (checkElement.is('ul') && !checkElement.is(':visible')) {
          $('#menu ul:visible').slideUp('normal');
          checkElement.slideDown('normal');
          return false;
        }
        return false; // Add this line to return false if none of the conditions match
      });
    }

    $(document).ready(function() {
      initMenu();
    });
  }
}
