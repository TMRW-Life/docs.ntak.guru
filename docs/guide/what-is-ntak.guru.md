# What is NTAK.GURU?

NTAK.GURU is wrapper for [NTAK](https://info.ntak.hu/) to provide a much simpler interface.

## Motivation

When we created our own application to report to NTAK, it took a developer for months. \
It has a huge, complicated and still not complete documentation. 

So we decided to create a service for other PMSes, because we know every popular programming language can make an HTTP \
request, but not every application are prepared for queued jobs and/or scheduled tasks.

With NTAK.GURU you can report the following events without making the user and/or guest to wait for us:
 - Reservation creation
 - Reservation update
 - Room change
 - Checkin
 - Checkout

Also, we are handling the scheduler for the Daily Closing report.

## Technologies

There is no reason to hide it. Or we just like to flex.

### Framework

We are using [Laravel](https://laravel.com) 9 LTS to enjoy the development of clean code.

### Hosting

Laravel has a first-party hosting called [Laravel Vapor](http://vapor.laravel.com). We use it, we love. \
Easy to learn and it's blazing fast. It's managing tons of services out of the box for us.

On top of that we are also using [Laravel Octane](https://laravel.com/docs/9.x/octane).

With these two wonderful tools, we are able to provide an extremely fast API for you.
Average response time is ~25 ms.  
