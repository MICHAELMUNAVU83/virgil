import React from "react";
import { Link } from "react-router-dom";

const OurProducts = () => {
  const projects = [
    {
      name: "Raila Odinga For AUC Chair",
      link: "https://railaodinga.com",
      redirect_link: "railaodinga",
      image_one: "/projects/raila/1.png",
      description:
        "The website www.railaodinga4auc.com is an official campaign platform supporting Raila Odinga's bid to become the Chairperson of the African Union Commission (AUC). It serves as a central hub for disseminating campaign information, engaging with supporters, and showcasing Odinga’s vision and policies for the African Union.",
      background:
        "As Raila Odinga embarked on his campaign for the AUC Chair position, there was a need for a robust digital presence to reach a wide audience across Africa. The website was created to unify his supporters, communicate his policy agenda, and leverage online platforms to garner endorsements and support from across the continent.",
      industry: "Political",
      services_used: ["React JS", "Tailwind CSS"],
      video: "https://player.vimeo.com/video/1004787420",
      image_two: "/projects/raila/2.png",
      image_three: "/projects/raila/3.png",
      image_four: "/projects/raila/4.png",
      image_five: "/projects/raila/5.png",
      solutions: [
        {
          title: "Interactive Campaign Map",
          description:
            "A dynamic map feature allowing users to view Raila Odinga's campaign trail across African countries. The map highlights key locations with markers that provide detailed information on events, speeches, and engagements.",
        },
        {
          title: "Endorsement Gallery",
          description:
            "A curated gallery displaying endorsements from prominent African leaders, influencers, and organizations. Each endorsement includes a photo, statement, and the option to share on social media, boosting the campaign’s visibility.",
        },
        {
          title: "Policy Vision Dashboard",
          description:
            "An interactive dashboard showcasing Raila Odinga’s policy proposals for the African Union Chairperson role. Users can explore detailed policy briefs, watch explainer videos, and download comprehensive PDFs.",
        },
        {
          title: "Key Policies and Campaign Updates",
          description:
            "Regularly updated content on Raila Odinga’s key policies, campaign events, and press releases. The website serves as a central repository for campaign information, ensuring supporters are informed and engaged with the latest developments.",
        },
      ],
      result:
        "The website has significantly bolstered Raila Odinga’s campaign by providing a professional and interactive platform that connects him with supporters and key stakeholders across Africa. The site's features, such as the interactive campaign map and endorsement gallery, have enhanced his visibility and engagement, playing a crucial role in rallying support for his bid to lead the African Union",
      result_image: "/projects/10x/1.png",
    },
    {
      name: "10XBeast",
      link: "https://10xbeast.com",
      redirect_link: "10xbeast",
      image_one: "/projects/10x/1.png",
      description:
        "10XBEAST is an AI-powered email marketing platform that helps to boost your sales significantly. It writes result-driven emails, targets customers effectively, reveals competitor secrets, and schedules meetings, saving time. The platform has proven results including a 250% revenue boost, 8.7x more conversions, 400% more deals, and saving 37hrs per week. It offers real-time success measurement, smart follow-up automation, and insightful meeting analytics. It's also equipped with a community for strategy exchange and growth.",
      background:
        "The problem that 10x Beast is addressing is the challenge of creating effective email marketing campaigns. They solve this by leveraging AI to enable businesses to quickly set up campaigns, craft compelling emails, automate targeting, scheduling, and follow-ups, and gain insights into competitor strategies and performance.",
      industry: "Sales and Marketing",
      services_used: ["Elixir", "Phoenix LiveView", "Python"],
      video: "https://player.vimeo.com/video/955164855",
      image_two: "/projects/10x/2.png",
      image_three: "/projects/10x/3.png",
      image_four: "/projects/10x/4.png",
      image_five: "/projects/10x/5.png",
      solutions: [
        {
          title: "AI-Powered Email Writing Assistant",
          description:
            "We created an intelligent email writing assistant that automatically crafts compelling emails designed to boost your sales and engagement rates.",
        },
        {
          title: "Targeted Customer Outreach",
          description:
            "We built a  platform that uses advanced AI to precisely target potential customers, ensuring that your messages are highly relevant and effective in driving conversions.",
        },
        {
          title: "Competitive Analysis",
          description:
            "We provide in-depth competitive analysis using AI to uncover strategies your competitors are using, helping you create more impactful marketing campaigns.",
        },
        {
          title: "Automated Scheduling",
          description:
            "We developed a smart meeting scheduler that uses AI to automatically schedule meetings, saving you time and streamlining your workflow.",
        },
      ],
      result:
        "10x Beast has achieved remarkable results for its users. They report up to a 250% increase in revenue, an 8.7x boost in conversions, and a 400% rise in closed deals. Additionally, users experienced more meetings scheduled, saving over 37 hours weekly on email tasks. The platform also boasts a 37.43% response rate, an 11.05% conversion rate, a 51.03% open rate, and a 99.98% delivery rate.",
      result_image: "/projects/10x/1.png",
    },

    {
      name: "Mwamba Rugby Club ",
      image_one: "/projects/mwamba/1.png",
      redirect_link: "mwamba",
      link: "https://mwambarugby.com",
      background:
        "Mwamba Rugby Football Club (Mwamba RFC) is a rugby team with a rich history and strong community involvement. They focus on promoting rugby in Kenya, developing talent, and organizing events like the Kabeberi 7s. Their website provides information on the team, upcoming events, partnerships, and ways to support or join the club.",
      industry: "Sports And Recreation",
      services_used: ["Elixir", "Phoenix LiveView"],
      description:
        "Mwamba Rugby Football Club's website featuring team information, club history, details on the Kabeberi 7s tournament ticketing, registration and login options. It also includes contact details, partnership information. Registration and login functionalities are available for user convenience.",
      video: "https://player.vimeo.com/video/974979154",
      image_two: "/projects/mwamba/2.png",
      image_three: "/projects/mwamba/3.png",
      image_four: "/projects/mwamba/4.png",
      image_five: "/projects/mwamba/5.png",
      solutions: [
        {
          title: "Event Ticketing",
          description:
            "Offers comprehensive details about events such as the Kabeberi 7s, including schedules and results and ticketing for their events.",
        },
        {
          title: "Membership Management:",
          description:
            "Allows users to register and log in to manage their membership, access exclusive content, and receive updates.",
        },
        {
          title: "E-commerce System",
          description:
            " Enables fans to purchase team merchandise directly from the website, supporting the club and showing team spirit.",
        },
        {
          title: "Team Information Access",
          description:
            "The system provides detailed information about the Mwamba Rugby team, including player profiles and team history.",
        },
      ],
      result_image: "/projects/mwamba/1.png",
      result:
        "Mwamba Rugby Football Club has leveraged its website to achieve numerous accomplishments. The site has facilitated increased ticket sales and higher game attendance by providing easy access to event information and purchasing options. Enhanced fan engagement through regular updates and interactive content has led to a more robust and active community. Additionally, the website has attracted strategic partnerships, contributing to financial growth and expanded outreach efforts.",
    },
    {
      name: "Lipia Ngoma",
      link: "https://lipiangoma.com",
      image_one: "/projects/lipia_ngoma/1.png",
      redirect_link: "lipiangoma",
      description:
        "Lipia Ngoma is an interactive platform allowing users to request songs at events, tip their favourite DJs, request custom mixes, and view DJ schedules. The platform offers easy payment methods for song requests and tips. Users can also enjoy features like viewing previous and upcoming DJ performances.",
      background:
        "Lipia Ngoma addresses the need for a streamlined way to interact with DJs at events. The platform allows users to quickly request songs, tip DJs, view their performance schedules, and request custom mixes. This enhances the event experience by making it easier to engage with DJs and enjoy personalized music services.",
      industry: "Fintech and Entertainment",
      services_used: ["Elixir", "Phoenix LiveView"],
      video: "https://player.vimeo.com/video/977286008",
      image_two: "/projects/lipia_ngoma/2.png",
      image_three: "/projects/lipia_ngoma/3.png",
      image_four: "/projects/lipia_ngoma/4.png",
      image_five: "/projects/lipia_ngoma/5.png",
      solutions: [
        {
          title: "Song Requests:",
          description:
            "Allows users to quickly request songs at events and pay for them through the platform.",
        },
        {
          title: "Tipping DJs",
          description:
            "Provides an easy way to tip your favorite DJ during events or while listening to their mixes.",
        },
        {
          title: "Custom Mix Requests:",
          description:
            "Enables users to request custom mixes from DJs, either from a Spotify playlist or selected songs on the platform.",
        },
        {
          title: "DJ Schedules",
          description:
            "Users can view DJ schedules to know when their favorite DJs are performing and request songs for their sets.",
        },
      ],
      result_image: "/projects/lipia_ngoma/1.png",
      result:
        "Lipiangoma.com has achieved significant results through its platform, enhancing the interaction between DJs and their audiences. Users can easily request songs, tip their favorite DJs, view schedules, and request custom mixes, leading to increased engagement and revenue for DJs. The convenience and interactivity provided by the platform have led to higher user satisfaction and more frequent use of the services offered, fostering a thriving community around music events.",
    },

    {
      name: "Headwear Solutions",
      link: "https://headwearsolutions.com",
      redirect_link: "headwearsolutions",
      background:
        "Headwear Solutions addresses the need for high-quality and stylish headwear through an e-commerce platform. They offer a wide range of beanies, caps, and hats for men and women, focusing on combining fashion and functionality.",
      industry: "E Commerce",
      services_used: ["Elixir", "Phoenix LiveView"],
      image_one: "/projects/headwearsolutions/1.png",
      description:
        "Headwear Solutions is an ecommerce system offers high-quality headwear for men and women. It allows you Explore trends in beanies, caps, and hats in our collections. You can purchase directly from the website and track your order",
      video: "https://player.vimeo.com/video/974955359",
      image_two: "/projects/headwearsolutions/2.png",
      image_three: "/projects/headwearsolutions/3.png",
      image_four: "/projects/headwearsolutions/4.png",
      image_five: "/projects/headwearsolutions/5.png",
      solutions: [
        {
          title: "Cart Management",
          description:
            "We allow users to manage their shopping cart with ease, adding and removing items as needed.",
        },
        {
          title: "E-commerce Payments",
          description:
            "Customers can make purchases using both card and phone payment options for a seamless shopping experience",
        },
        {
          title: "Order Tracking",
          description:
            "Users can track their orders from the moment of purchase until delivery.",
        },
        {
          title: "Stock Management CRM",
          description:
            "Our system includes a robust stock management CRM to keep track of inventory and customer relationships.",
        },
      ],
      result_image: "/projects/headwearsolutions/1.png",
      result:
        "Headwear Solutions has effectively used its website to boost sales and brand visibility. By offering a wide range of high-quality headwear, including beanies, caps, and hats for men, women, and unisex collections, the platform has attracted a diverse customer base. The convenience of online shopping and access to the latest trends has led to increased customer satisfaction and loyalty. Social media integration has further enhanced engagement, driving more traffic and sales through promotional activities.",
    },
    {
      name: "Mche , AI and  Agritech",
      image_one: "/projects/mche/1.png",
      link: "https://mche.africa",
      redirect_link: "mche",
      description:
        "This product is an AI ChatBot designed especially for farmers. It provides guidance on agriculture from crop growth to sales, including the use of fertilisers and pesticides. It's a one-stop-shop for farming resources, offering advice on managing excess or spoiled produce.",
      background:
        "Headwear Solutions addresses the need for high-quality and stylish headwear through an e-commerce platform. They offer a wide range of beanies, caps, and hats for men and women, focusing on combining fashion and functionality.",
      industry: "Agriculture",
      services_used: ["Elixir", "Phoenix LiveView"],
      video: "https://player.vimeo.com/video/976172240",
      image_two: "/projects/mche/2.png",
      image_three: "/projects/mche/3.png",
      image_four: "/projects/mche/4.png",
      image_five: "/projects/mche/5.png",
      solutions: [
        {
          title: "AI Features",
          description:
            " Includes an AI-powered chatbot for customer support and AI-based disease detection to help farmers identify crop issues early.",
        },
        {
          title: "Marketplace",
          description:
            "Facilitates a marketplace where farmers can buy and sell produce and agricultural supplies.",
        },
        {
          title: "Crop Advice",
          description:
            "Offers expert advice on the best crops to grow based on soil type, climate, and market demand.",
        },
        {
          title: "Resource Management",
          description:
            "Assists farmers with managing resources such as fertilizers, pesticides, and farming equipment.",
        },
      ],
      result_image: "/projects/mche/1.png",
      result:
        "MCHE Africa has leveraged its website to provide comprehensive farming support, helping farmers with crop growth, fertilizers, pesticides, and equipment needs. The platform's resources and guides have increased productivity and efficiency for users, while also offering solutions for dealing with excess produce and spoilage. The site’s interactive features, including AI chatbots and disease prediction tools, have further enhanced user experience, leading to greater adoption and satisfaction among farmers.",
    },
    {
      name: "PataRide",
      redirect_link: "pataride",
      link: "https://pataride.com",
      image_one: "/projects/pataride/1.png",
      background:
        "PataRide addresses the need for efficient and eco-friendly commuting by providing a carpooling service. It allows users to easily book rides, find suitable carpool options, and communicate with drivers through an integrated messaging system. The platform emphasizes safety, community-driven travel, and sustainability, aiming to create convenient and secure commutes.",
      industry: "Logistics",
      services_used: ["Elixir", "Phoenix LiveView", "Google Maps"],
      description:
        "Pataride is a trusted carpooling service . Streamline your travel booking in a single tap, with options to tailor your journey according to preferences. Interact with your driver using our in-app messaging. Security is our priority; track your trip for a safe journey",
      video: "https://player.vimeo.com/video/975006469",
      image_two: "/projects/pataride/2.png",
      image_three: "/projects/pataride/3.png",
      image_four: "/projects/pataride/4.png",
      image_five: "/projects/pataride/5.png",
      solutions: [
        {
          title: "Streamlined Booking",
          description:
            " Allows users to book rides with a single tap, making the process quick and easy.",
        },
        {
          title: "Ride Search",
          description:
            "Enables users to find rides tailored to their preferences by filtering by departure time, destination, and available seats",
        },
        {
          title: "In-App Messaging",
          description:
            "Provides an integrated messaging feature for easy communication between riders and drivers.",
        },
        {
          title: "Safety Tracking",
          description:
            "Ensures user safety by allowing them to track their route from start to finish.",
        },
      ],
      result_image: "/projects/pataride/1.png",
      result: "",
    },
    {
      name: "Ticketing System",
      link: "https://thelultureke.com",
      image_one: "/projects/thekulture/1.png",
      redirect_link: "thekultureke",
      background:
        "The major problem that The Kulture is addressing is the challenge of event ticketing. They solve this by providing a platform that allows event organizers to create different ticket types, manage promo prices, and sell tickets securely. Users can purchase tickets for various events and have them scanned at the gate for entry. The system is designed to handle both mobile and card transactions, making it convenient for both event organizers and attendees.",
      industry: "Events",
      services_used: ["Elixir", "Phoenix LiveView"],
      description:
        "This product is an event ticketing system that allows admins to add different ticket types and allows users to purchase their tickets in a safe and secure manner . The system was built to allow for both Mobile and Card Transactions.",
      video: "https://player.vimeo.com/video/974962621",
      image_two: "/projects/thekulture/2.png",
      image_three: "/projects/thekulture/3.png",
      image_four: "/projects/thekulture/4.png",
      image_five: "/projects/thekulture/5.png",
      solutions: [
        {
          title: "Ticket Purchase",
          description:
            "Users can buy tickets for various events directly through the platform, making the process convenient and secure.",
        },
        {
          title: "Gate Scanning",
          description:
            "Provides a system for scanning tickets at the event entrance, ensuring a smooth and efficient entry for attendees.",
        },
        {
          title: "Promo Price Management",
          description:
            "Event organizers can manage promotional prices, offering discounts and special deals to attract more attendees.",
        },
        {
          title: "Ticket Type Customization",
          description:
            "Allows the creation of different ticket types, such as VIP, early bird, and general admission, to cater to diverse audience needs.",
        },
      ],
      result_image: "/projects/thekulture/1.png",
      result:
        "The Kulture KE has successfully utilized its website to enhance event visibility and ticket sales for their unique fusion of Dancehall and Gengetone music events. The platform provides detailed information on upcoming events, artist lineups, and special guest performances, driving higher engagement and anticipation among fans. Easy access to ticket purchasing and interactive event details have contributed to increased attendance and a growing community of music enthusiasts.",
    },

    {
      name: "Influencer Management System",
      link: "https://allthingsocial.fly.dev",
      redirect_link: "allthingsocial",
      background:
        " AllThingsSocial addresses the need for efficient influencer management for brands and agencies. It provides a comprehensive CRM platform to organize, manage, and analyze influencer collaborations. Brands can add and categorize influencers, track detailed insights, and build strong relationships, while influencers can access brands and manage their profiles. This tool enhances influencer marketing efforts by streamlining interactions and providing valuable analytics. ",
      industry: "Marketing",
      services_used: ["Elixir", "Phoenix LiveView"],
      image_one: "/projects/all_things_social/1.png",
      description:
        "This is an influencer management system that allows brands to get influencer , influencers to get brands and influencers to get paid for their work.",
      video: "https://player.vimeo.com/video/974994674",
      image_two: "/projects/all_things_social/2.png",
      image_three: "/projects/all_things_social/3.png",
      image_four: "/projects/all_things_social/4.png",
      image_five: "/projects/all_things_social/5.png",

      solutions: [
        {
          title: "Influencer Management Tool",
          description:
            " Organize and manage influencers and collaborations in one place.",
        },
        {
          title: "Detailed Insights and Analytics:",
          description:
            "Access detailed profile analytics for every influencer, including reach, engagement, and audience demographics.",
        },
        {
          title: "Relationship Building:",
          description:
            "Enrich influencer profiles with comments, notes, and historical data to build strong relationships.",
        },
        {
          title: "Customizable Organization::",
          description:
            "Customizable Organization: Add and organize influencers based on various criteria such as status, niche, and labels.",
        },
      ],
      result_image: "/projects/all_things_social/1.png",
      result:
        "All Things Social has successfully streamlined influencer marketing efforts for brands and agencies, providing a centralized platform for managing collaborations and tracking influencer performance. The system's detailed insights and analytics have enabled brands to make informed decisions and optimize their influencer marketing strategies. By fostering strong relationships between brands and influencers, All Things Social has facilitated successful partnerships and campaigns, driving brand awareness and engagement.",
    },
  ];

  return (
    <div id="projects" className="container mx-auto px-4 py-16">
      <h2 className="capitalize jakarta text-[#4285F4] py-2 text-xl font-bold">
        Our Top Projects
      </h2>
      <div className="flex justify-between items-center">
        <h1 className="text-[#0C1523] font-bold text-3xl jakarta md:text-6xl  mb-10">
          Browse our Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Link to={`/projects/${project.redirect_link}`} key={index}>
            <div className="rounded group  cursor-pointer shadow-md flex flex-col">
              <img
                src={project.image_one}
                alt="Image 1"
                className="w-full h-full object-cover rounded-t-lg mb-4"
              />
              <div className="flex gap-3 p-4">
                <p className="inline-block py-2 px-4 jakarta rounded-lg font-semibold text-base leading-tight text-secondary-color bg-purple-100 group-hover:text-white group-hover:bg-[#4285F4] transition-colors duration-300 ease-in-out">
                  {project.industry}
                </p>
              </div>
              <h3 className="text-[#0C1523] font-semibold md:text-4xl text-2xl jakarta mb-10 p-4 group-hover:text-[#4285F4]">
                {project.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
