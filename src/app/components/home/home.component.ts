import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    techs = [
        {
            image: '/assets/images/mongodb.png',
            title: 'Mongoose',
            text: 'Elegant mongodb object modeling tool for node.js'
        },
        {
            image: '/assets/images/express.png',
            title: 'Express',
            text: 'Fast, unopinionated, minimalist web framework for Node.js'
        },
        {
            image: '/assets/images/node.png',
            title: 'NodeJs',
            text: 'Lightweight server with event-driven, non-blocking I/O model'
        },
        {
            image: '/assets/images/angular.png',
            title: 'Angular',
            text: 'JavaScript based open source frontend web application framework'
        },
        {
            image: '/assets/images/material.png',
            title: 'Material Design',
            text: 'Unified system that combines theory, resources, and tools for crafting digital experiences.'
        },
        {
            image: '/assets/images/jwt.png',
            title: 'Security',
            text: 'JWT based authentication along with bcrypt encryption.'
        }
    ];
}
