import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbsModule } from 'ngx-breadcrumpy';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductReviewsComponent } from './pages/product-reviews/product-reviews.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductBreadcrumbResolver } from './pages/products/product-breadcrumb-resolver.service';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ProductDetailsComponent,
    ProductReviewsComponent,
    ProductsComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        data: {
          breadcrumb: 'Home'
        },
        children: [
          {
            path: '',
            component: HomeComponent
          },
          {
            path: 'about',
            component: AboutComponent,
            data: {
              breadcrumb: 'About'
              // breadcrumb: of('About')
              // breadcrumb: timer(0, 1000)
            }
          },
          {
            path: 'products',
            data: {
              breadcrumb: {
                label: 'Products'
              }
              // breadcrumb: of('Products')
              // breadcrumb: timer(0, 1000).pipe(map(i => `Products ${i}`))
            },
            children: [
              {
                path: '',
                component: ProductsComponent
              },
              {
                path: ':id',
                data: {
                  // breadcrumb: 'Products details'
                  // breadcrumb: of('Products')
                  // breadcrumb: timer(0, 1000)
                  // breadcrumb: (route: ActivatedRouteSnapshot) => {
                  //   return 'Product ' + route.params.id;
                  // },
                  breadcrumb: ProductBreadcrumbResolver
                },
                children: [
                  {
                    path: '',
                    component: ProductDetailsComponent
                  },
                  {
                    path: 'reviews',
                    component: ProductReviewsComponent,
                    data: {
                      breadcrumb: 'Reviews'
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]),
    BreadcrumbsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
