import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $(() => {
      const toggleDropdown = (e) => {
        // tslint:disable-next-line:one-variable-per-declaration
        const _d = $(e.target).closest('.dropdown'),
          _m = $('.dropdown-menu', _d);
          // console.log('DropDown: ', _d);
          // console.log('Menu', _m);
        setTimeout(() => {
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            // _d.toggleClass('show', shouldOpen);
            console.log('Should: ', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
          }, e.type === 'mouseleave' ? 0 : 0);
      };
      $('body')
        .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
        .on('click', '.dropdown-menu a', toggleDropdown);
    });
  }

}
