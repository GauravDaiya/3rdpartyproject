import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

  constructor(private translate: TranslateService,private http: HttpClient) {this.translate.setDefaultLang('en');}
  ngOnInit(): void {
    this.http.get('/assets/i18n/en.json').subscribe(data => {
      console.log(data);
    });
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
  
  breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  };


  slides = [
    { image: 'https://img.freepik.com/free-photo/upset-gloomy-uneasy-cute-pouting-redhead-girl-frowning-dont-want-speak-you-hiding-face_1258-309944.jpg?t=st=1737095919~exp=1737099519~hmac=40df76a785aa00792495213eab5b8747f5e8a511080a696e74334e77356e1689&w=996' },
    { image: 'https://images.pexels.com/photos/5864593/pexels-photo-5864593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { image: 'https://media.istockphoto.com/id/1013668052/photo/detail-of-the-old-zoom-lens-on-a-camera-white-background.jpg?b=1&s=612x612&w=0&k=20&c=A4el8h6Pqmd4Ie9TfKOMOFzbRbCjonN50vCopXnwttM=' },
    { image: 'https://img.freepik.com/free-photo/upset-gloomy-uneasy-cute-pouting-redhead-girl-frowning-dont-want-speak-you-hiding-face_1258-309944.jpg?t=st=1737095919~exp=1737099519~hmac=40df76a785aa00792495213eab5b8747f5e8a511080a696e74334e77356e1689&w=996' },
    { image: 'https://images.pexels.com/photos/5864593/pexels-photo-5864593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
  ];

  slideConfig = {
    "slidesToShow": 3,  
    "slidesToScroll": 1,  
    "dots": true, 
    "infinite": true,  
    "autoplay": true, 
    "autoplaySpeed": 1000,
    "centerMode": true,  
    "responsive": [
      {
        "breakpoint": 1024,
        "settings": {
          "slidesToShow": 2,
          "slidesToScroll": 1,
          "dots": true
        }
      },
      {
        "breakpoint": 600,
        "settings": {
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "dots": false
        }
      }
    ]
  };

}
