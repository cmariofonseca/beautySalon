import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Menu toggle-button
    $(document).ready(function() {
      $('#buttonMenu').click(function() {
        if ($('#buttonMenu').attr('class') === 'fa fa-bars fa-2x') {
          $('#buttonMenu').removeClass('fa fa-bars fa-2x').addClass('fa fa-close fa-2x');
          $('nav ul').css({
            'maxHeight': '30em'
          });
          $('.Navbar .Icon').addClass('Background');
        } else {
          $('#buttonMenu').removeClass('fa fa-close fa-2x').addClass('fa fa-bars fa-2x');
          $('nav ul').css({
            'maxHeight': '0px'
          });
        }
      });
    });

    // Scrolling effect
    $(document).on('scroll', function() {
      if ($(document).scrollTop()) {
        $('nav').addClass('Background');
        $('.Navbar .Icon').addClass('Background');
      } else {
        $('nav').removeClass('Background');
        $('.Navbar .Icon').removeClass('Background');
      }
    });
  }

}
