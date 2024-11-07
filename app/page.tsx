"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Languages, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

// Content type definition
type ContentType = {
  [key: string]: {
    nav: {
      about: string;
      services: string;
      contact: string;
    };
    hero: {
      title: string;
      subtitle: string;
    };
    story: {
      title: string;
      description: string[];
      mission: {
        title: string;
        description: string[];
      };
      vision: {
        title: string;
        description: string[];
      };
    };
    values: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
        img: string;
      }>;
    };
    whyInsurance: {
      title: string;
      keyPoints: string[];
      description: string[];
    };
    moreToKnow: {
      title: string;
      items: string[];
    };
    learn: {
      title: string;
      business: string;
      personal: string;
      cta: string;
    };
    contact: {
      title: string;
      phone: string;
      email: string;
      address: string[];
      form: {
        firstName: string;
        lastName: string;
        email: string;
        message: string;
        submit: string;
        required: string;
      };
    };
  };
};

const content: ContentType = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      title: "Preserving Prosperity,",
      subtitle: "Providing Peace of Mind",
    },
    story: {
      title: "Our Story",
      description: [
        "Sky Insurance Brokerage is a trusted insurance brokerage company wholly committed to preserving the prosperity of each of its clients.",
        "We offer our customers a service they can value with the peace of mind they are looking for.",
        "As our client, you are assured of our undivided attention and our ability to handle all your insurance needs in an ever-changing market.",
        "We provide a service that is transparent and sound, persistent in its ambition to improve and provide quality insurance products.",
        "We work to establish solid relationships with our policy holders, insurance companies, our employees and the community we live and conduct our business in.",
        "Our work ethic is based on a commitment to meet the principles outlined above and continue to serve the best interests of all our clients.",
      ],
      mission: {
        title: "Our Mission",
        description: [
          "To provide cost effective, innovative & comprehensive insurance solutions in addition to designing the best of its breed claims administration and management systems ensuring speedy settlement of claims to individuals, SMEs & mega corporates in Egypt.",
          "We aspire to combine excellence, quality and timely service delivery with professionalism in risk coverage, premium management, claim handling, risk management and insurance portfolio management services through a well qualified staff using the latest technologies & easy to use mobile application.",
        ],
      },
      vision: {
        title: "Our Vision",
        description: [
          "Setting new benchmarks in the insurance brokerage industry & becoming the client’s first choice.",
        ],
      },
    },
    values: {
      title: "Our Values",
      subtitle:
        "We offer our customers a service they can value with the peace of mind they are looking for. As our client, you are assured of our undivided attention and our ability to handle all your insurance needs in an ever-changing market.",
      items: [
        {
          title: "Excellence",
          description:
            "Our clients expect nothing less from us, and we strive to deliver the highest levels of customer service and product excellence. That’s one reason why we discuss the “Circle of Operational Excellence” with our clients – ensuring they are aware of their coverage options for commercial insurance, personal insurance, life, disability and group benefits.",
          img: "/icon 1.png",
        },
        {
          title: "Quality",
          description:
            "From our staff training to our technology investments, we ensure our systems and people deliver a top-quality solution for clients. As an example, much of our operations are paperless, which helps to ensure client files and information are available on a confidential basis to any licensed team member. That means any of our team members can help you when you call, even if your regular contact is out of the office.",
          img: "/icon 2.png",
        },
        {
          title: "Integrity",
          description:
            "SKY Insurance Brokerage is recognized in the industry and among clients for its strong experience, responsive client service, excellent product knowledge, pro-active risk management and loss control, and its unique claims advocacy processes. Taken together, these elements help us deliver on the core value of integrity.",
          img: "/icon 3.png",
        },
        {
          title: "Relationships",
          description:
            "From the start, our motto has been: We take pride in caring for our customers! We value the relationships we have built with our clients and insurance companies. Underlying these strong bonds is our commitment to professionalism. As proof, we only have to look at the many client referrals we receive – likely, the best compliment for any business.",
          img: "/icon 4.png",
        },
      ],
    },
    whyInsurance: {
      title: "Why SKY Insurance",
      keyPoints: [
        "1. Cost",
        "2. Speed",
        "3. Ease",
        "4. Security of personal data and peace of mind that all the essentials are covered.",
      ],
      description: [
        "When shopping for insurance, there are several key items to look at:",
        "Choosing Sky Insurance Brokerage helps get you the insurance you need at the best price. As we work for the biggest insurance companies, the service is typically more personalized, meaning better quality support.",
        "Insurance can be a complex concept that is not always easy to understand. While we know that we need insurance to protect our health, our house and car and to ensure that our loved ones are protected, the finer details often become blurred. We can help you navigate the process of finding, comparing, and acquiring insurance by breaking it down into terms and conditions. We pride themselves on providing our clients with the best value in insurance coverage. Having an experienced insurance broker represent you is also a wise way to safeguard yourself and your business.",
      ],
    },
    moreToKnow: {
      title: "More to know",
      items: [
        "Sky Insurance Brokerage has grown to become a leading Egyptian broker of life, property and casualty insurance products and services.",
        "The Company believes that as insurance intermediary, it is the next stepping stone in the path to becoming the complete insurance solution provider.",
        "The company strives with dedication to determine the needs of the clients and excels in providing the right solutions to meet the client’s expectations and attain the critical success factors in respect of service.",
        "We are insurance brokerage licensed & registered by the Egyptian Financial Regulatory Authority under No. 94.",
        "Sky Insurance Brokerage renders its expertise and assistance to clients by providing:",
        "1. Consulting services, analyzing and examining existing insurance coverage.",
        "2. Risk inspection, risk assessment, risk management.",
        "3. Customization of insurance coverage - specific to the client's activities.",
        "4. Managing insurance claims and other support services.",
        "Our licensed professionals take a pro-active consultative approach to understanding the risks in your business, resolving problems and recommending insurance that covers your operations from all sides.",
      ],
    },
    learn: {
      title: "Learn how we can protect you",
      business: "BUSINESS / COMMERCIAL INSURANCE",
      personal: "PERSONAL INSURANCE",
      cta: "Learn more",
    },
    contact: {
      title: "Contact us.",
      phone: "Call us: 15759",
      email: "E-mail: ib@sky.eg",
      address: [
        "address: One Kattameya, 215, Maadi",
        "Kattameya Ringroad - Cairo, Egypt.",
      ],
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        message: "Message",
        submit: "Send",
        required: "required",
      },
    },
  },
  ar: {
    nav: {
      about: "معلومات عنا",
      services: "خدماتنا",
      contact: "اتصل بنا",
    },
    hero: {
      title: "،حماية تامة لمستقبلك",
      subtitle: "اختيارك الأمثل في التأمين",
    },
    story: {
      title: "قصتنا",
      description: [
        "شركة سكاي للوساطة التأمينية هي شركة وساطة تأمين موثوق بها وملتزمة بالحفاظ على ازدهار كل عميل من عملائنا",
        "نحن نقدم لعملائنا خدمة يمكنهم تقديرها مع راحة البال التي يبحثون عنها. كعميل لدينا، يمكنك الاطمئنان إلى اهتمامنا الكامل وقدرتنا على التعامل مع جميع احتياجاتك التأمينية في سوق متغير باستمرار",
        "نحن نقدم خدمة تتسم بالشفافية وصحيحة، مثابرة في طموحها في لتحسين وتوفيرمنتجات تأمينية عالية الجودة",
        "نحن نعمل على إقامة علاقات قوية مع حاملي وثائق التأمين، شركات التأمين، موظفينا، والمجتمع الذي نعيش ونقوم بأعمالنا فيه.تعتمد أخلاقيات عملنا على الالتزام بتلك المبادئ المذكورة أعلاه ومواصلة خدمة مصالح جميع عملائنا بأفضل طريقة",
      ],
      mission: {
        title: "مهمتنا",
        description: [
          "توفير حلول تأمين فعالة من حيث التكلفة ومبتكرة وشاملة بالإضافة إلى تصميم أفضل أنظمة إدارة المطالبات وإدارتها لضمان التسوية السريعة للمطالبات للأفراد والشركات الصغيرة والمتوسطة والشركات الكبرى في مصر",
          "نطمح إلى الجمع بين التميز والجودة وتقديم الخدمات في الوقت المناسب مع الاحترافية في تغطية المخاطر وإدارة الأقساط ومعالجة المطالبات وإدارة المخاطر وخدمات إدارة محافظ التأمين من خلال موظفين مؤهلين تأهيلاً جيدًا باستخدام أحدث التقنيات وتطبيقات الهاتف المحمول سهلة الاستخدام",
        ],
      },
      vision: {
        title: "رؤيتنا",
        description: [
          "وضع معايير جديدة في صناعة وساطة التأمين وأن نصبح الخيار الأول للعميل",
        ],
      },
    },
    values: {
      title: "قيمنا",
      subtitle:
        "نحن نقدم لعملائنا خدمة يمكنهم تقديرها بالراحة التي يبحثون عنها. كعميل لنا، يمكنكم أن تكونوا مطمئنين بتفرّد اهتمامنا وقدرتنا على التعامل مع جميع احتياجاتكم في مجال التأمين في سوق متغير باستمرار",
      items: [
        {
          title: "التميز",
          description:
            "عملاؤنا لا يتوقعون شيئًا أقل من ذلك منا، ونحن نسعى جاهدين لتقديم أعلى مستويات خدمة العملاء والتميز في المنتجات. وهذا هو أحد الأسباب التي تجعلنا نناقش دائرة التميز التشغيلي مع عملائنا - لضمان أنهم على دراية بخيارات تغطية التأمين الخاصة بهم للتأمين التجاري والشخصي والحياة والعجز والمزايا الجماعية",
          img: "/icon 1.png",
        },
        {
          title: "الجودة",
          description:
            "بدءًا من تدريب موظفينا وحتى استثماراتنا التكنولوجية، نضمن أن أنظمتنا وموظفينا يقدمون حلولاً عالية الجودة للعملاء. على سبيل المثال، الكثير من عملياتنا غير ورقية، مما يساعد على ضمان توفر ملفات العملاء والمعلومات على أساس سري لأي عضو مرخص في الفريق. وهذا يعني أن أيًا من أعضاء فريقنا يمكنه مساعدتك عند الاتصال، حتى لو كان جهة الاتصال المعتادة لديك خارج المكتب",
          img: "/icon 2.png",
        },
        {
          title: "النزاهة",
          description:
            "تمتلك شركة سكاي للوساطة التأمينية سمعة طيبة في الصناعة وبين العملاء بفضل خبرتها القوية، وخدمة العملاء السريعة الاستجابة، والمعرفة الممتازة بالمنتجات، وإدارة المخاطر النشطة والتحكم في الخسائر، بالإضافة إلى عمليات الدعم الفريدة للمطالبات. تجتمع هذه العناصر معًا لمساعدتنا على تحقيق القيمة الأساسية للنزاهة",
          img: "/icon 3.png",
        },
        {
          title: "العلاقات",
          description:
            "من البداية، كان شعارنا: نفخر بالعناية بعملائنا! نقدر العلاقات التي بنيناها مع عملائنا وشركات التأمين. يكمن وراء هذه الروابط القوية التزامنا بالاحترافية. كدليل على ذلك، يكفينا أن ننظر إلى العديد من إحالات العملاء التي نتلقاها - على الأرجح، أفضل إشادة لأي عمل تجاري",
          img: "/icon 4.png",
        },
      ],
    },
    whyInsurance: {
      title: "لماذا تأمين سكاي",
      keyPoints: [
        "١.التكلفة",
        "٢.السرعة",
        "٣.السهولة",
        "٤.أمان البيانات الشخصية والطمأنينة بأن جميع الأمور الأساسية مغطاة",
      ],
      description: [
        ":عند التسوق للتأمين، هناك عدة عناصر رئيسية يجب النظر فيها",
        "ان اختيار شركة سكاي للوساطة التأمينية يساعدك في الحصول على التأمين الذي تحتاجه بأفضل سعر. حيث أننا نعمل مع أكبر شركات التأمين، فإن الخدمة عادةً ما  تكون أكثر تخصيصًا، مما يعني دعمًا أفضل جودة",
        "يمكن أن يكون التأمين مفهومًا معقدًا ليس دائمًا سهل الفهم. على الرغم من أننا نعلم أننا بحاجة إلى التأمين لحماية صحتنا ومنزلنا وسيارتنا وضمان حماية أحبائنا، إلا أن التفاصيل الدقيقة غالبًا ما تتشوش. يمكننا مساعدتك في التنقل خلال عملية البحث عن التأمين ومقارنته والحصول عليه عن طريق تقسيمه إلى شروط وأحكام. نفتخر بتوفير أفضل قيمة لعملائنا في تغطية التأمين. والحصول على وسيط تأمين متمرس يمثل أيضًا وسيلة حكيمة لحماية نفسك وعملك",
      ],
    },
    moreToKnow: {
      title: "لمعرفه المزيد",
      items: [
        "شركة سكاي للوساطة التأمينية نمت لتصبح واحدة من الوسطاء الرائدين في مصر في منتجات وخدمات التأمين على الحياة والممتلكات والحوادث.",
        "تعتقد الشركة أنها كوسيط تأميني، تمثل الخطوة التالية في طريق أن تصبح مزود حلول تأمينية شاملة.",
        "تسعى الشركة بتفانٍ لتحديد احتياجات العملاء والتفوق في تقديم الحلول الصحيحة لتلبية توقعات العميل وتحقيق عوامل النجاح الحرجة فيما يتعلق بالخدمة",
        "نحن وساطة تأمين مرخصة ومسجلة لدى الهيئة العامة للرقابة المالية المصرية تحت رقم 94",
        ":تقدم شركة سكاي للوساطة التأمينية خبرتها ومساعدتها للعملاء من خلال تقديم",
        "١. الخدمات الاستشارية، تحليل وفحص التغطية التأمينية الحالية.",
        "٢. تفتيش المخاطر، تقييم المخاطر، إدارة المخاطر",
        "٣. تخصيص تغطية التأمين - خاصة بأنشطة العملاء",
        "٤. إدارة المطالبات التأمينية وخدمات دعم أخرى",
        "يتبنى محترفونا المرخصون نهجًا استشاريًا نشطًا لفهم المخاطر في عملك، وحل المشكلات وتوصية بتأمين يغطي عملياتك من جميع الجوانب",
      ],
    },
    learn: {
      title: "طرق يمكننا من خلالها حمايتك",
      business: "تأمين الأعمال / التجاري",
      personal: "تأمين شخصي",
      cta: "تعرف أكثر",
    },
    contact: {
      title: "اتصل بنا",
      phone: "اتصل بنا على الرقم: 15759",
      email: "ib@sky.eg :البريد الإلكتروني",
      address: [
        "العنوان: القطامية ون، 215، طريق القطامية الدائري",
        "المعادي، القاهرة، مصر",
      ],
      form: {
        firstName: "الاسم الأول",
        lastName: "الاسم الاخير",
        email: "البريد الإكترونى",
        message: "الرسالة",
        submit: "إرسال",
        required: "required",
      },
    },
  },
};

export default function Component() {
  const [lang, setLang] = useState("en");
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth scroll setup
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        className={`fixed w-full z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-white text-black shadow-md"
            : "bg-transparent text-white"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-2 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="Sky Insurance"
                width={70}
                height={70}
              />
            </Link>

            <div className="flex items-center space-x-5">
              <Link href="/" className="hover:text-blue-900 transition-colors">
                {content[lang].nav.about}
              </Link>
              <Link
                href="#contact"
                className="hover:text-blue-900  transition-colors"
              >
                {content[lang].nav.contact}
              </Link>

              <Link
                href="#services"
                className="hover:text-blue-900 transition-colors"
              >
                {content[lang].nav.services}
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLang(lang === "en" ? "ar" : "en")}
                className={isScrolled ? "text-primary" : "text-white"}
              >
                <Languages className="h-5 w-5" />
                <span className="sr-only">
                  {lang === "en" ? "Switch to Arabic" : "Switch to English"}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Image
          src="/hero section.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 text-center text-white">
          {/* Dark star on top-left, hidden on mobile */}
          <Image
            src="/dark star.png"
            alt="star"
            className="absolute top-32 left-32 hidden md:block"
            height={130}
            width={130}
          />

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={fadeIn}
          >
            {content[lang].hero.title}
            <br />
            {content[lang].hero.subtitle}
          </motion.h1>

          {/* Light star on bottom-right, hidden on mobile */}
          <Image
            src="/light star.png"
            alt="star"
            className="absolute bottom-24 right-32 hidden md:block"
            height={130}
            width={130}
          />
        </div>
      </motion.section>

      {/* Story and Mission Section */}
      <motion.section
        className="py-24 bg-white"
        dir={lang === "ar" ? "rtl" : "ltr"}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div variants={fadeIn}>
              <Image
                src="/our story.jpg"
                alt="Our Story"
                width={700}
                height={700}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div variants={fadeIn} className="space-y-6">
              <h2 className="text-6xl font-light text-blue-800">
                {content[lang].story.title}
              </h2>

              {content[lang].story.description.map((description, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-start space-x-4"
                >
                  <p className="text-gray-800 text-xl">{description}</p>
                </motion.div>
              ))}
              <Image
                src="/light star.png"
                alt="star"
                className=" bottom-0 left-0 h-12 w-12"
                height={150}
                width={150}
              />
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn} className="space-y-6 md:order-1">
              <h2 className="text-6xl font-light text-blue-800">
                {content[lang].story.mission.title}
              </h2>

              {content[lang].story.mission.description.map(
                (description, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="flex items-start space-x-4"
                  >
                    <p className="text-gray-800 text-xl">{description}</p>
                  </motion.div>
                )
              )}
              <Image
                src="/dark star.png"
                alt="star"
                className=" bottom-0 left-0 h-12 w-12"
                height={150}
                width={150}
              />
            </motion.div>
            <motion.div variants={fadeIn} className="md:order-2">
              <Image
                src="/our mission.jpg"
                alt="Our Mission"
                width={700}
                height={700}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-24 ">
            <motion.div variants={fadeIn}>
              <Image
                src="/our vision.jpg"
                alt="Our Vision"
                width={700}
                height={700}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div variants={fadeIn} className="space-y-6">
              <h2 className="text-6xl font-light text-blue-800">
                {content[lang].story.vision.title}
              </h2>

              {content[lang].story.vision.description.map(
                (description, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="flex items-start space-x-4"
                  >
                    <p className="text-gray-800 text-xl">{description}</p>
                  </motion.div>
                )
              )}
              <Image
                src="/light star.png"
                alt="star"
                className=" bottom-0 left-0 h-12 w-12"
                height={150}
                width={150}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* More to Know Section */}
      <motion.section
        className="relative py-24 bg-[url('/bg.jpg')] bg-cover bg-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {/* Dark star on top left or top right based on language */}
        <Image
          src="/dark star.png"
          alt="star"
          className={cn(
            "absolute top-20 hidden md:block", // Hide on mobile (md breakpoint)
            lang === "ar" ? "right-28" : "left-28" // Adjust position based on RTL/LTR
          )}
          height={150}
          width={150}
        />

        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            variants={fadeIn}
            className="text-5xl font-light text-blue-800 mb-12 text-center"
          >
            {content[lang].moreToKnow.title}
          </motion.h2>

          <motion.div variants={staggerChildren} className="space-y-6">
            {content[lang].moreToKnow.items.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex items-start space-x-4"
              >
                <p className="text-gray-800 text-xl">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Light star on bottom right or bottom left based on language */}
        <Image
          src="/light star.png"
          alt="star"
          className={cn(
            "absolute bottom-20 hidden md:block", // Hide on mobile (md breakpoint)
            lang === "ar" ? "left-28" : "right-28" // Adjust position based on RTL/LTR
          )}
          height={150}
          width={150}
        />
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-24 bg-white"
        // initial="visible"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-5xl font-light text-blue-800 mb-4">
              {content[lang].values.title}
            </h2>
            <p className="text-gray-800 text-xl max-w-xl mx-auto">
              {content[lang].values.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {content[lang].values.items.map((item) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                className="text-center space-y-4"
              >
                <div className="mx-auto rounded-full flex items-center justify-center ">
                  <Image
                    src={item.img}
                    alt={item.title}
                    height={100}
                    width={100}
                  ></Image>
                </div>
                <h3 className="text-3xl font-light text-blue-800 ">
                  {item.title}
                </h3>
                <p className="text-gray-800 text-xl">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Insurance Section */}
      <motion.section
        className="relative py-24 bg-[url('/bg.jpg')] bg-cover bg-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <Image
          src="/light star.png"
          alt="star"
          className={`absolute bottom-20 ${
            lang === "ar" ? "right-28" : "left-28"
          } hidden md:block`}
          height={150}
          width={150}
        />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <motion.div variants={fadeIn} className="md:w-1/3">
              <h2 className="text-5xl font-light text-blue-800 mb-4 w-56">
                {content[lang].whyInsurance.title}
              </h2>
            </motion.div>
            <motion.div variants={fadeIn} className="md:w-2/3 space-y-2">
              <p className="text-gray-800 text-2xl">
                {content[lang].whyInsurance.description[0]}
              </p>
              <ul className="space-y-4">
                {content[lang].whyInsurance.keyPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-gray-800 text-xl"
                  >
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {content[lang].whyInsurance.description
                .slice(1)
                .map((desc, index) => (
                  <p key={index} className="text-gray-800 text-2xl">
                    {desc}
                  </p>
                ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Learn How We Can Protect You Section */}
      <motion.section
        className="py-24 bg-[#22519f] text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn}
            className="text-6xl font-normal mb-12 text-center"
          >
            {content[lang].learn.title}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={fadeIn} className="text-center">
              <Image
                src="/BUSINESS  COMMERCIAL INSURANCE.jpg"
                alt="Business Insurance"
                width={700}
                height={600}
                className="rounded-lg shadow-xl mb-4 mx-auto"
              />
              <h3 className="text-2xl font-normal mt-4">
                {content[lang].learn.business}
              </h3>
            </motion.div>
            <motion.div variants={fadeIn} className="text-center">
              <Image
                src="/PERSONAL INSURANCE.jpg"
                alt="Personal Insurance"
                width={700}
                height={600}
                className="rounded-lg shadow-xl mb-4 mx-auto"
              />
              <h3 className="text-2xl font-normal mt-4">
                {content[lang].learn.personal}
              </h3>
            </motion.div>
          </div>
          <motion.div variants={fadeIn} className="text-center">
            <Button
              variant="outline"
              className="rounded-full bg-transparent text-xl"
              size="lg"
            >
              {content[lang].learn.cta}
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 bg-[#020c3f] text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeIn} className="space-y-6">
              <h2 className="text-4xl font-light">
                {content[lang].contact.title}
              </h2>
              <div className="space-y-2 text-2xl font-light w-96">
                <a href="tel:">{content[lang].contact.phone}</a>
                <br />
                <a href="mailto:ib@sky.eg">{content[lang].contact.email}</a>
                <br />
                {content[lang].contact.address.map((line, index) => (
                  <a
                    href="https://maps.app.goo.gl/VsEioxBDNYkt6pRN8"
                    target="_blank"
                    key={index}
                  >
                    {line}
                  </a>
                ))}
              </div>
              <div className="flex flex-col space-x-1">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  <a
                    href="https://eg.linkedin.com/company/sky-insurance-brokerage"
                    className="hover:opacity-80"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://www.facebook.com/skyholding"
                    className="hover:opacity-80"
                  >
                    <Facebook />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <form className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm">
                      {content[lang].contact.form.firstName}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input required className="bg-white text-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm">
                      {content[lang].contact.form.lastName}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input required className="bg-white text-primary" />
                  </div>
                </div>
                <div className="space-y-6">
                  <label className="text-sm">
                    {content[lang].contact.form.email}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    required
                    className="bg-white text-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">
                    {content[lang].contact.form.message}
                  </label>
                  <Textarea className="bg-white text-primary" rows={2} />
                </div>
                <Button className=" bg-white text-primary hover:bg-gray-100">
                  {content[lang].contact.form.submit}
                </Button>
              </form>
            </motion.div>
          </div>
          <motion.div variants={fadeIn} className="mt-24 text-center">
            <p>
              &copy; {new Date().getFullYear()} Sky Insurance. All rights
              reserved.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
