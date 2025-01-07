import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:"" , component:HomeComponent, pathMatch:"full"},
    {path:"home" , component:HomeComponent, title:"Home"},
    {path:"about" , component:AboutComponent, title:"About"},
    {path:"contact" , component:ContactComponent, title: "Contact"},
    {path:"portfolio", component:PortfolioComponent, title:"portfolio"},
    {path:"**", component:NotFoundComponent, title:"notFound"}
];
