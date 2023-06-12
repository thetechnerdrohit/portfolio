import ovonts from "../../public/images/projects/ovonts.png"
import decra from "../../public/images/projects/decra.png"
import webuy from "../../public/images/projects/webuy.png"
import ifeedback from "../../public/images/projects/ifeedback.png"
import wazen from "../../public/images/projects/wazen.png"
import { type IProject } from "~/interfaces/IProject"

export const ProjectsInfo: IProject[] = [
    {
        "name": "Ovonts - Unify",
        "description": "Ovonts - Unify is a powerful SaaS platform designed to revolutionize influencer marketing. With its comprehensive suite of features, Ovonts - Unify empowers users to effortlessly discover, manage, and collaborate with influencers, all while streamlining campaign execution and tracking progress.",
        "is_featured": true,
        "img_source": ovonts,
        "source_code_link": "",
        "demo_link": "https://app.ovonts.com/signin/identifier",
        "domains": [
            "#InfluencerMarketing",
            "#SaaS",
            "#CampaignManagement",
            "#InfluencerCollaboration",
            "#InfluencerMarketingRevolution"
        ],
        "type": "Professional Project"
    },
    {
        "name": "Decra",
        "description": "Decra: Debit Credit Analytics is an exceptional app designed to revolutionize business financial management. As an integral part of your portfolio, Decra showcases your ability to control finances, prevent revenue leakage, automate reconciliation, and gain deep insights into periodic sales.",
        "is_featured": false,
        "img_source": decra,
        "source_code_link": "",
        "demo_link": "https://play.google.com/store/apps/details?id=com.view.decra",
        "domains": [
            "#DebitCreditAnalytics",
            "#BusinessFinances",
            "#AutomatedReconciliation"
        ],
        "type": "Freelance Project"
    },
    {
        "name": "Webuy",
        "description": "Webuy is a cutting-edge ecommerce platform designed specifically for engineering students, catering to their unique needs and requirements. With a user-friendly interface and a wide range of products, Webuy offers a seamless shopping experience tailored to engineering enthusiasts.",
        "is_featured": false,
        "img_source": webuy,
        "source_code_link": "",
        "demo_link": "https://ecommerce-42a66.web.app/",
        "domains": [
            "#EcommercePlatform",
            "#EngineeringStudents",
            "#SeamlessShopping"
        ],
        "type": "Freelance Project"
    },
    {
        "name": "iFeedback",
        "description": "iFeedback is a cutting-edge cross-platform application designed exclusively for restaurants, enabling them to gather valuable feedback from their customers. This powerful tool empowers restaurants to improve their services, enhance customer satisfaction, and drive business growth.",
        "is_featured": false,
        "img_source": "https://res.cloudinary.com/vectorarora/image/upload/v1686563363/ifeedback_su7ld5.png",
        "source_code_link": "",
        "demo_link": "",
        "domains": [
            "#RestaurantFeedback",
            "#CustomerExperience",
            "#ServiceImprovement"
        ],
        "type": "Freelance Project"
    },
    {
        "name": "Wazen",
        "description": "Wazen is an innovative mobile app designed exclusively for Dubai clients, offering a comprehensive platform to effortlessly manage vehicle policies for both 2-wheelers and 4-wheelers. With Wazen, users can purchase, view, renew, cancel, and transfer their policies, providing a seamless and convenient experience for all their insurance needs.",
        "is_featured": false,
        "img_source": "https://drive.google.com/uc?export=view&id=11paAEUVWhp3TaR8NGIu4k-3tsBEm_skJ",
        "source_code_link": "",
        "demo_link": "https://wplusdev.aspnetdevelopment.in/wazen/dashboard",
        "domains": ["#DubaiClients", "#VehiclePolicies", "#InsuranceSolutions"],
        "type": "Professional Project"
    }
]