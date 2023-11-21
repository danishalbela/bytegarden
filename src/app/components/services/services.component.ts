import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
cardData=[
  {
    image:'https://media.istockphoto.com/id/1456339578/photo/developing-programming-and-coding-technologies-professional-developer-programmer-cooperation.webp?b=1&s=170667a&w=0&k=20&c=U49viqgBENq-XiBi-RsVjPAu3heo-2vsWGhxjINZcbs=',
    title:'Website Development',
    description:'A website is the digital identity of a company and helps the online audience get to know about it. If you are a business owner getting leads must be on the top of your list. This is why you need a renowned web development agency by your side. We focus on building websites that not only help you connect with the target audience but also leave a great impression on them.'
  },
  {
    image:'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D',
    title:'Software Development',
    description:'Through our software development expertise, our team optimizes robust software to help your business stay functional. Our software development assistance ensures that your business runs smoothly and produces great results'
  },
  {
    image:'https://media.istockphoto.com/id/1488105061/photo/the-power-of-ai-transforming-industries-and-customer-service-a-look-into-the-future-yellow-ai.webp?b=1&s=170667a&w=0&k=20&c=6UivX9iZ1MCaAamDJtyfwpGHpP0XoGJ5KmusjMxAR4M=',
    title:'Mobile App Development',
    description:'Mobile apps offers businesses the opportunity to grow extensively Many entrepreneurs go for mobile app development to help their business grow With the help of expert app developers, businesses get their feature-rich applications developed Your business can also grow extensively with the help of our app development expertise'
  },
]
}