var job_data = {

    // Job Seeker Object
    job_seeker: {
        "firstName": "Dmitri",
        "lastName": "Stavrou",
        "emailAddress": "dmitri@gmail.com",
        "addressLine1": "The Willows",
        "addressLine2": "29 Acacia Road",
        "townOrCity": "Southampton",
        "countyOrRegion": "Hampshire",
        "postcode": "E8 5DE",
        "country": "United Kingdom",
        "currentJobLocation": "London",
        "graduationYear": 2010,
        "currentJobStatus": "F/T",
        "currentJobLevel": "Intermediate",
        "nationality": "Greek",
        "dobDay": 7,
        "dobMonth": 11,
        "dobYear": 1989,
        "LCFStudentNumber": "STA08237348",
        "LCFCourse": "BA (Hons) FDT Menswear",
        "personalStatement": "Dimitri Stavrou made a real splash at this year's London Fashion Week. The young designer came out firing with a collection full of shimmering fabrics, fringes and trendy designs. The collection is absolutely brilliant. One look included a metallic gold trench coat that I would love to call my own. Dimitri Stavrou is definitely a designer to keep a close eye on in the years to come - Fashion Indie, 2009",
        "pointsOfInterest": [
            {
                "id": 1,
                "type": "show",
                "name": "BA Runway 2008",
                "description": "Presentation of Graduate collections to press and fashion industry at the Royal Academy of Arts",
                "image": "dmitri1.jpg"
            },
            {
                "id": 2,
                "type": "show",
                "name": "MA Runway 2009",
                "description": "Presentation of Post-Graduate collections to press and fashion industry at the Raphael Gallery, Victoria & Albert Museum",
                "image": "dmitri2.jpg"
            },
            {
                "id": 3,
                "type": "press",
                "name": "Editorial, VOGUE.com (Sep 2010)",
                "description": "Dimitri won Collection of the Year, the first menswear collection to do so, with his unique take on men’s tailoring. It included half-suits mixed with mesh-draped panels which had a sporty feel about them in a vibrant palette of pink, green and blue.",
                "image": "vogue.jpg"
            },
            {
                "id": 4,
                "type": "press",
                "name": "Editorial, Drapers (Nov 2011)",
                "description": "Featured as one of the top menswear designe graduates to watch. Drapers highlighted London as the hot spot for design pools. Full feature can be found on line.",
                "image": "drapers.jpg"
            },
            {
                "id": 5,
                "type": "award",
                "name": "Deutchbank Award, 2010",
                "description": "Deutsche Bank launched the Deutsche Bank Awards for Creative Enterprises scheme in 1993 to offer practical and financial support to artists, craftspeople, designers and performers to start a business or carry out a project in that crucial year after leaving college. In 2012, we will have fifteen winners from thirteen of the UK's top arts colleges.",
                "image": "deutchbank.png"
            },
            {
                "id": 6,
                "type": "award",
                "name": "MA Fashion Award, 2009",
                "description": "British designers and creatives are renowned for their ability to set the global fashion agenda.  Each year the British Fashion Awards celebrates their creativity and success. Established in 1989, the British Fashion Awards was born from the British Fashion Council’s then five-year-old Designer of the Year Award. For more than 20 years, the British Fashion Awards has been celebrating the contributions of British designers, creatives and models to the international fashion scene. Dimitri was 1 of 5 designers to receive the prestigous award.",
                "image": "bfa.jpg"
            }
        ]
    },

    // Job Object
    job: {
        "jobTitle": "Seamstress",
        "companyName": "Zaeem Jamal",
        "companyURL": "http://www.zaeemjamal.com",
        "jobType": "Graduate job",
        "jobContractLength": "Permanent",
        "jobSalary": "Negotiable",
        "jobSummary": "Zaeem Jamal are currently looking for a part time in house seamstress who would conduct dress fittings and carry out alterations on our gowns and dresses.",
        "jobDescription": "<p>They will pay a negotiable hourly rate on a part time basis. The job would be for probably 2-3 half days per week. So possibly in total approximately 12/15 hours a week, variable. This can be more when busier.</p><p>The candidate would really need to have some experience in fittings and alterations, as they will be working on their own, not under supervision. So a graduate perhaps who has some hands on experience and has worked on the technical aspect of tailoring.</p><p>Below is the website that would give you some idea of their House Collection. Their gowns are in silk and are often delicately beaded.</p>",
        "jobApplicationDeadline": "11 April, 2014",
        "jobLocation": "Shoreditch",
        "jobStatus": "Live"
    },

    // Job Categories Object
    job_categories: [
        {
            "name": "Administration",
            "total": 14
        },
        {
            "name": "Buying",
            "total": 4
        },
        {
            "name": "Design",
            "total": 5
        },
        {
            "name": "Design",
            "total": 5
        },
        {
            "name": "Marketing",
            "total": 5
        },
        {
            "name": "Photography",
            "total": 5
        },
        {
            "name": "Product development",
            "total": 5
        },
        {
            "name": "Public relations",
            "total": 5
        },
        {
            "name": "Retail",
            "total": 5
        },
        {
            "name": "Sales",
            "total": 5
        },
        {
            "name": "Visual merchandising",
            "total": 5
        }   
    ]

}

// Custom Properties
job_data["job_seeker"].fullName = job_data["job_seeker"].firstName + ' ' + job_data["job_seeker"].lastName;

