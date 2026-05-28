---
title: "The Importance Of QA At Netflix | Growth and Success"
description: "Is it really important to having a big QA team at Netflix which generate revenue of 20.16 billion USD in 2019? Testing is the almost important for a brand like Netflix."
date: 2020-10-28
author: "Shivam Gupta"
category: "Technology"
cover: "https://www.volumetree.com/wp-content/uploads/2020/10/The-importance-of-QA-at-Netflix.png"
coverGradient: "from-brand-purple-deep via-brand-purple to-brand-purple-light"
sourceUrl: "https://www.volumetree.com/2020/10/28/the-importance-of-qa-at-netflix/"
---

###### table of contents

We live in tumultuous, but interesting times. The rich have gotten richer, the poor—poorer and innovators have devised innovative ways to work through the disruption that has been brought about by the coronavirus-induced pandemic. The pandemic has also brought about a battery of changes to our lifestyle, beginning with many of us learning how to cook complex dishes from scratch, others finding newer hobbies, or even spending time to learn something new about ourselves. During the pandemic, many of us have also finally found the time to curl up on our couches, turn into couch potatoes and binge-watch Netflix originals till we run out of bandwidth. 

**Sudden surges**

Although most services such as [Netflix](http://netflix.com/), [Amazon Prime video](https://www.primevideo.com/) and many other video and audio streaming service providers have highly scalable systems that can withstand sudden surges and spikes in usage, there are chances that these services might experience outages which can result in user frustration and in some extreme cases of long-term outages—abandonment of the platform too. Complex, large-scale distributed systems such as Netflix and Amazon Prime video and many others that potentially have millions of users must be tested effectively and extensively keeping in mind surges and spikes. 

However, unusually heavy spikes such as those caused by the pandemic have been unprecedented and have possibly not been in any [company’s testing team](http://volumetree.com/quality-assurance/) kitty.

![Netflix team](data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27819%27%20height%3D%27492%27%20viewBox%3D%270%200%20819%20492%27%3E%3Crect%20width%3D%27819%27%20height%3D%27492%27%20fill-opacity%3D%220%22%2F%3E%3C%2Fsvg%3E)

**Continuous integration delivery and production**

The problems of CI/CD and resolving the problems of constantly engaged systems

Companies like [Netflix](http://netflix.com/) have constant updates to their system, which are continuously tested and delivered to their live platforms. For this, Netflix testing teams create hundreds of thousands of tester accounts every day, each being used in thousands of test scenarios to avoid any shortfalls.

This has caused the testing of Netflix to move from a manual testing regimen that would work on a test system before making it live to a large, distributed automated testing of Netflix client and server applications running at scale in production. To facilitate this, testing at Netflix has gone from a low-volume manual mode to a continuous, fully automated, voluminous mode where nothing is left to chance.

**An imaginary scenario with real implications**

Imagine this—you, and millions of others are at nail-biting, suspenseful climax in the story and suddenly—boom! Netflix is now offline. This would send alarm bells ringing at Netflix HQ and testing SWAT teams would suddenly fly in from your windows to analyse what went wrong. However, thankfully, this does not happen often.

**The Goal**

The goal at Netflix is simple—to be online for their users 99.99% of the time. Although Netflix has a pretty decent track record of staying online, they do occasionally encounter glitches that put the system off track. One of these incidents occurred when a development team at Netflix deployed software that impacted the large infrastructure at Netflix negatively, causing widespread disruption in services and thousands of unhappy customers.

This led to Netflix scrambling to create a fix that would essentially resolve the issue in few hours, but also gave Netflix some food for thought—that their testing regimen was inadequate and ineffective for such a large, distributed, user-facing system.

**What could go wrong?**

What happened at Netflix was an oversight on various levels. A new piece of code that was designed to clean up unused resources was actually being tested on the production server. This oversight caused two major problems due to bugs in the code:

1.  The first bug caused a dry run mode flag in cleanup that was to protect the actual cleanup to be interpreted incorrectly—reversing its effect. This was caused to a poorly written unit test that could have caused this issue to be caught in development.
2.  The second bug was in a piece of code that checked if a resource was actually unused. The conclusion of this check overlooked some cases that existed only in production.

The combination of these two bugs caused a removal of key resources in production—resulting in the actual outage at Netflix.

**Preventing these problems**

Preventing or reducing the incidents of these problems leads to a common dilemma

Should testing be done in a test environment or in a production environment? Although most of us would advocate testing to be done in pre-production so that actual customers are not impacted, some would advocate testing in production to ensure that code is running well in both test and prod. The reality of the scenario is that the code should be tested in all three situations: dev, test and prod. The challenge faced by Netflix was to devise an effective methodology that helps in deciding why, when and how to test in these environments.

This also led to another set of questions

-   Is the test environment a safe and complete mirror of our production environment?

OR

-   Is the test environment the latest build with features that others might need to integrate with?

The result of this was the common scenario of having overtly complex and numerous test environments. 

**The answer**

The answer to this problem that was creating from thinking of a fix to the existing problem was simple—end-to-end automation that would replicate thousands of scenarios without problems. 

This answer, however, came with its own set of problems—finding a scalable solution to creating a production-like pre-production environment that does not require cloning production entirely and resulting in a massive investment requirement as well.

Another problem was that pre-production and production usage patterns could be completely different from each other. Traffic is also thousands of times less when compared to production. 

**Testing payments**

Testing payments was another colossus altogether. Instead of testing payments in production using real money, it is better to create fake MOPs and fake transactions exercised on them in sandbox accounts that does not overburden the existing payment systems in place. 

![Netflix testing payment](data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27722%27%20height%3D%27342%27%20viewBox%3D%270%200%20722%20342%27%3E%3Crect%20width%3D%27722%27%20height%3D%27342%27%20fill-opacity%3D%220%22%2F%3E%3C%2Fsvg%3E)

**The approach**

Of the thousands of possible approaches, Netflix chose *production capture and replay* to scale their test to be as close as possible to prod.

A large number of requests from customer devices was taken from persistence and duplex-replayed them in test after they were stripped of their personally identified information. This caused tests to become real-world scenarios. This also helped in identifying numerous corner-case bugs that were previously unknown.

The bugs identified were routed back into functional and integrated tests via a schema. This also helped in gaining confidence on quality feature migration and helped to accelerate change velocity. This also gave way to an interesting learning:

All the basic duplex tests could be run in PRODUCTION through tester accounts. However, prod capture and replay duplex tests were limited to the test environment because replaying in production would harm actual customer data with reissue of requests.

![Netflix owner](data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27863%27%20height%3D%27519%27%20viewBox%3D%270%200%20863%20519%27%3E%3Crect%20width%3D%27863%27%20height%3D%27519%27%20fill-opacity%3D%220%22%2F%3E%3C%2Fsvg%3E)

> Hastings says. “And instead tragically it is a biological one, so everybody is locked up and we had the greatest growth in the first half of this year that we ever had.” With a market capitalization of around US$230 billion, it has been vying with Walt Disney since March for the title of the world’s most valuable entertainment group.

Masked and refreshed data could safely be used to replay requests in the test environment after a time delay. This focused our interest on the data set and not the production environment. Although this was not totally as stable as production, but gave us a good idea of how it could be.

Failing is important in testing. Failures help test teams to identify real issues in downstream implementations. To mitigate this, all functional validations were to run real canaries in production, essentially exposing a small percentage of actual customer traffic to both versions of the API under test.

Running canary analysis algos on the metrics that were gathered from these implementations and a compare-verify regimen would check if client and server metrics were equivalent. This would help to capture failing request logs from the canaries and would help to debug and triage issues better. 

**Learnings**

Learnings from such an approach are manifold. 

-   The first one would be to understand that test and prod are different, but their differences must be embraced to utilize the capability of both.
-   Although testing is good in a sandboxed environment, testing in production is important for such implementations.
-   Solving the problems in either environment can go a long way in ensuring test success
-   Stay on the lookout for rethinking your testing strategy. Even if it may come at an extra cost, the end result would be worth it.
-   Find a pragmatic testing shape that is right for your company—do not look for a textbook shape that fits in.
-   Start production simulation and chaos experiments—these will help to validate your functional and resiliency testing capabilities for the future.

At Netflix, chaos testing is done at scale in production. Testing everything from fire raining from the sky to aliens killing their servers, they leave nothing to chance. If they haven’t, why should you? The testing teams at [Volumetree](http://volumetree.com/) are experienced, reliant and know where to hand out the red flags. Give your software the quality edge it needs. Schedule a consultation with our test consultants today!

[![build your mobile app](data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27933%27%20height%3D%27311%27%20viewBox%3D%270%200%20933%20311%27%3E%3Crect%20width%3D%27933%27%20height%3D%27311%27%20fill-opacity%3D%220%22%2F%3E%3C%2Fsvg%3E)](http://volumetree.com/contact-us/?utm_source=WebsiteBlog&utm_medium=Pallvi)

[App development services](https://www.volumetree.com/tag/app-development-services/) [Application Quality](https://www.volumetree.com/tag/application-quality/) [app like cameo](https://www.volumetree.com/tag/app-like-cameo/) [Best Mobile App Development](https://www.volumetree.com/tag/best-mobile-app-development/) [Business ideas for startups](https://www.volumetree.com/tag/business-ideas-for-startups/) [Business Models](https://www.volumetree.com/tag/business-models/) [cameo](https://www.volumetree.com/tag/cameo/) [cameocost](https://www.volumetree.com/tag/cameocost/) [cameopersonalised](https://www.volumetree.com/tag/cameopersonalised/) [Covid-19 pandemic](https://www.volumetree.com/tag/covid-19-pandemic/) [Create a mobile app](https://www.volumetree.com/tag/create-a-mobile-app/) [Customer success stories](https://www.volumetree.com/tag/customer-success-stories/) [Digital Presence](https://www.volumetree.com/tag/digital-presence/) [Edtech entrepreneurs](https://www.volumetree.com/tag/edtech-entrepreneurs/) [Education technology](https://www.volumetree.com/tag/education-technology/) [entrepreneurial journey](https://www.volumetree.com/tag/entrepreneurial-journey/) [Food delivery apps](https://www.volumetree.com/tag/food-delivery-apps/) [Healthcare](https://www.volumetree.com/tag/healthcare/) [Hire a dedicated team](https://www.volumetree.com/tag/hire-a-dedicated-team/) [Minimum Viable Product](https://www.volumetree.com/tag/minimum-viable-product/) [Mobile app development](https://www.volumetree.com/tag/mobile-app-development/) [mobile app development company](https://www.volumetree.com/tag/mobile-app-development-company/) [mobile app development cost](https://www.volumetree.com/tag/mobile-app-development-cost/) [Mobile app development process](https://www.volumetree.com/tag/mobile-app-development-process/) [mobile app development services](https://www.volumetree.com/tag/mobile-app-development-services/) [Mobile app security](https://www.volumetree.com/tag/mobile-app-security/) [modern technology](https://www.volumetree.com/tag/modern-technology/) [MVP Development](https://www.volumetree.com/tag/mvp-development/) [MVP development process](https://www.volumetree.com/tag/mvp-development-process/) [On demand economy](https://www.volumetree.com/tag/on-demand-economy/) [On demand food ordering platform](https://www.volumetree.com/tag/on-demand-food-ordering-platform/) [on demand food services](https://www.volumetree.com/tag/on-demand-food-services/) [On Demand home services](https://www.volumetree.com/tag/on-demand-home-services/) [On demand home services market](https://www.volumetree.com/tag/on-demand-home-services-market/) [On demand nurses services](https://www.volumetree.com/tag/on-demand-nurses-services/) [outsourcing mobile app development](https://www.volumetree.com/tag/outsourcing-mobile-app-development/) [Outsourcing web app development](https://www.volumetree.com/tag/outsourcing-web-app-development/) [Pet health tech](https://www.volumetree.com/tag/pet-health-tech/) [Pet Health tech industry](https://www.volumetree.com/tag/pet-health-tech-industry/) [product development](https://www.volumetree.com/tag/product-development/) [quality assurance](https://www.volumetree.com/tag/quality-assurance/) [quality assurance software](https://www.volumetree.com/tag/quality-assurance-software/) [Quality Assurance testing](https://www.volumetree.com/tag/quality-assurance-testing/) [webappdevelopment](https://www.volumetree.com/tag/webappdevelopment/) [whatiscameo](https://www.volumetree.com/tag/whatiscameo/)

## view related content
