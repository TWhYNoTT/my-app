import React from 'react';
import { Download, Printer } from 'lucide-react';

export default function CV() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body * {
          visibility: hidden;
        }
        #cv-container, #cv-container * {
          visibility: visible;
        }
        #cv-container {
          position: absolute;
          left: 0;
          top: 0;
        }
        .no-print {
          display: none !important;
        }
        @page {
          margin: 0;
          size: A4;
        }
        html, body {
          height: 100vh;
          margin: 0 !important;
          padding: 0 !important;
        }
      }
    `;
    document.head.appendChild(style);
    window.print();
    document.head.removeChild(style);
  };

  return (
    <div className="relative">
      <div className="fixed top-4 right-4 flex gap-2 no-print z-50">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
        >
          <Printer size={16} />
          Print
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          <Download size={16} />
          Download PDF
        </button>
      </div>

      <div id="cv-container" className="font-sans text-black bg-white p-8 max-w-4xl mx-auto text-sm">
        {/* Header with name centered and contact info on sides */}
        <div className="relative flex items-start justify-between ">
          <div className="text-left">
            <p>Cairo, Egypt</p>
            <p><a href="https://www.linkedin.com/in/abdelrahman-mostafa-978817273/" target="_blank" className="text-blue-600">LinkedIn</a> • <a href="https://github.com/TWhYNoTT/" target="_blank" className="text-blue-600">GitHub</a></p>
          </div>
          <h1 className="absolute left-1/2 top-0 -translate-x-1/2 text-2xl font-bold whitespace-nowrap text-center">ABDELRAHMAN MOSTAFA</h1>
          <div className="text-right">
            <p>+20 1128582404</p>
            <p><a href="mailto:abdoabudeif@gmail.com" className="text-blue-600">abdoabudeif@gmail.com</a></p>
          </div>
        </div>

        <div className="text-center mt-3">
          <h2 className="text-lg font-bold mt-1">FULL STACK WEB & MOBILE DEVELOPER (NODE.JS | REACT | REACT NATIVE | AWS)</h2>
        </div>

        <div className="border border-gray-300 p-3 mt-3 mb-1 text-sm">
          <p>
            Full Stack Web & Mobile Developer with 5+ years of experience specializing in backend architecture,
            scalable RESTful APIs, database engineering, and cloud solutions using Node.js, Express,
            TypeScript, MongoDB, and SQL Server, alongside modern web frontends with React and cross-platform mobile apps with React Native & Expo.
          </p>
          <p className="mt-2">
            Experienced with AWS, Azure, Docker, CI/CD pipelines, Cloudflare R2,
            real-time data synchronization, mobile app deployment (iOS & Android), and AI-powered solutions.
          </p>
          <p className="mt-2">
            Delivered web and mobile applications for clients across the USA, UAE, Saudi Arabia, and Egypt
            while working in fully remote teams.
          </p>
        </div>
        <div className="flex items-start p-2">
          <span className="mr-2 text-xl"> </span>
          <span> </span>
        </div>
        <div className="flex items-start p-2">
          <span className="mr-2 text-xl"> </span>
          <span> </span>
        </div>
        {/* Employment Header */}
        <div className="border-b border-black py-1 ">
          <h2 className="text-xl font-bold text-center">EMPLOYMENT</h2>
        </div>

        {/* Table-like structure for employment entries */}
        <div>
          {/* Full Stack Web & Mobile Developer Whipp Digital */}
          <div className="grid grid-cols-3 py-1">
            <div className="font-bold text-left">Full Stack Web & Mobile Developer</div>
            <div className="font-bold text-center">Apr 2024 - Present</div>
            <div className="font-bold text-right whitespace-nowrap">Whipp Digital - US (Remote)</div>
          </div>
          <div className="mb-1">
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Engineered scalable backend systems and RESTful APIs with Node.js and Express powering an auction platform aggregating live data from platform users and external auction platforms like Copart.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Architected and built real-time synchronization service using Node.js to automatically sync auction data from multiple external platforms with our platform.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Developed image organization and processing service with automated upload to Cloudflare R2 storage.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Implemented performance optimizations, database indexing, and query tuning across the platform to ensure efficient data processing.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Integrated advanced AI models including Claude, ChatGPT, and ElevenLabs into platform workflows and video generation pipelines.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Implemented communication services using WhatsApp API, Twilio, and Telnyx for seamless connectivity.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Managed end-to-end DevOps operations, including server provisioning, machine management, Docker containerization, and CI/CD deployment pipelines.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Contributing to virtual phone numbers platform and AI video generator platform development.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Integrated self-hosted help desk and customer support solutions such as Chatwoot and Zammad.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Created dynamic, responsive web interfaces with ReactJS and cross-platform mobile experiences with React Native.</span>
            </div>
          </div>

          {/* Full-stack Web & Mobile Developer Devura */}
          <div className="grid grid-cols-3 py-1">
            <div className="font-bold text-left">Full Stack Web & Mobile Developer</div>
            <div className="font-bold text-center whitespace-nowrap">Apr 2022 - Apr 2024</div>
            <div className="font-bold text-right">Devura - UAE (Remote)</div>
          </div>
          <div className="mb-1">
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Designed and developed scalable backend systems and RESTful APIs using Node.js and Express.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Modeled, normalized, and optimized relational and NoSQL database schemas using MongoDB, SQL Server, and MySQL.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Managed deployment pipelines, cloud environments, and Agile development workflows using Azure DevOps.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Created responsive frontend web interfaces with ReactJS.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Built cross-platform mobile applications for iOS and Android using React Native and Expo.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Remote position working independently to deliver complete end-to-end web and mobile solutions.</span>
            </div>
          </div>
          <div className="flex items-start p-2">
            <span className="mr-2 text-xl"> </span>
            <span> </span>
          </div>
          <div className="flex items-start p-2">
            <span className="mr-2 text-xl"> </span>
            <span> </span>
          </div>
          <div className="flex items-start p-2">
            <span className="mr-2 text-xl"> </span>
            <span> </span>
          </div>
          <div className="flex items-start p-2">
            <span className="mr-2 text-xl"> </span>
            <span> </span>
          </div>
          <div className="flex items-start p-2">
            <span className="mr-2 text-xl"> </span>
            <span> </span>
          </div>
          <div className="flex items-start p-2">
            <span className="mr-2 text-xl"> </span>
            <span> </span>
          </div>
          <div className="flex items-start p-2">
            <span className="mr-2 text-xl"> </span>
            <span> </span>
          </div>
          <div className="flex items-start p-2">
            <span className="mr-2 text-xl"> </span>
            <span> </span>
          </div>
          <div className="flex items-start p-2">
            <span className="mr-2 text-xl"> </span>
            <span> </span>
          </div>
          <div className="flex items-start p-2">
            <span className="mr-2 text-xl"> </span>
            <span> </span>
          </div>
          <div className="flex items-start p-2">
            <span className="mr-2 text-xl"> </span>
            <span> </span>
          </div>
          <div className="flex items-start p-2">
            <span className="mr-2 text-xl"> </span>
            <span> </span>
          </div>
          {/* Freelance Web & Mobile Developer - Consolidated section */}
          <div className="grid grid-cols-3 py-1">
            <div className="font-bold text-left">Web & Mobile Developer</div>
            <div className="font-bold text-center">Jan 2021 - Apr 2022</div>
            <div className="font-bold text-right">Multiple Freelance Clients (Remote)</div>
          </div>
          <div className="mb-1">
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span><strong>Joele Special Medical Co (Saudi Arabia)</strong> - Created Node.js service for real-time synchronization between local SQL Server database and remote MySQL database. Implemented React web application for database management.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span><strong>Lapis Jewelry (Saudi Arabia)</strong> - Full-time 3-month project developing invoicing system using Node.js and ReactJS. Implemented WhatsApp integration system using Twilio API for customer communications.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span><strong>ialbatin MOMRA Gov (Saudi Arabia)</strong> - Implemented secure API integration layer connecting React web interface with Node.js backend services.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span><strong>Benaa Almostaqbal Property (UAE)</strong> - Developed property management backend using PHP Laravel.</span>
            </div>


            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span><strong>Buraydah Hospitals (Saudi Arabia)</strong> - Developed healthcare management web portal and responsive mobile interface using ReactJS.</span>
            </div>

            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span><strong>Royal-Track Shipping (Saudi Arabia)</strong> - Developed shipping management web platform and mobile tracking interface using ReactJS.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span><strong>ADSSF (UAE)</strong> - Freelance project developing responsive landing page and registration page for Abu Dhabi Statistics Stakeholders Forum.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span><strong>Alaaddin E-commerce (Yemen)</strong> - Developed responsive e-commerce web and mobile storefront using HTML, CSS, and JavaScript.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span><strong>AWS-Welding Inspector Certification (Egypt)</strong> - Created responsive certification platform using HTML and CSS.</span>
            </div>
          </div>

          {/* Full Stack Web & Mobile Developer Upwork */}
          <div className="grid grid-cols-3 py-1">
            <div className="font-bold text-left">Full Stack Web & Mobile Developer</div>
            <div className="font-bold text-center">Oct 2020 – Present</div>
            <div className="font-bold text-right">Upwork - Freelance</div>
          </div>
          <div className="mb-1">
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Delivered full-stack web and mobile applications, scalable backend services, cloud infrastructure, and AI integration projects for international clients using ReactJS, React Native, Expo, Node.js, TypeScript, AWS, Azure, and modern DevOps practices.</span>
            </div>
            <div className="flex items-start">
              <span>Profile: <a href="https://www.upwork.com/freelancers/~01448c570fc7f814d5" target="_blank" rel="noreferrer" className="text-blue-600">https://www.upwork.com/freelancers/~01448c570fc7f814d5</a></span>
            </div>
          </div>
        </div>

        {/* Education Header */}
        <div className="border-b border-black py-1 ">
          <h2 className="text-xl font-bold text-center">EDUCATION</h2>
        </div>

        {/* Education entries */}
        <div>
          <div className="grid grid-cols-3 py-1">
            <div className="font-bold text-left">Diploma</div>
            <div className="font-bold text-center">Jun 2020 – Oct 2020</div>
            <div className="font-bold text-right " style={{ whiteSpace: 'nowrap' }}>Information Technology Institute (ITI)</div>
          </div>

          <div className="">
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Full-Stack Web & Mobile Development</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Developed full-stack web and mobile applications with strong focus on backend architecture using Node.js, React, React Native, and modern cloud technologies</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Implemented complex database designs using MongoDB and Mongoose/Prisma</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Website: <a href="https://www.iti.gov.eg" target="_blank" rel="noreferrer" className="text-blue-600">https://www.iti.gov.eg</a></span>
            </div>
          </div>

          <div className="grid grid-cols-3 py-1">
            <div className="font-bold text-left">Bachelor of Computer Science</div>
            <div className="font-bold text-center">Sep 2016 – Jun 2020</div>
            <div className="font-bold text-right">Asyut University</div>
          </div>
          <div className="mb-1">
            <div className="flex items-start">
              <span className="mr-2 text-xl">•</span>
              <span>Grade: Very Good</span>
            </div>
          </div>

        </div>

        {/* Awards & Additional Experience Header */}
        <div className="border-b border-black py-1 mb-1">
          <h2 className="text-xl font-bold text-center">AWARDS & ADDITIONAL EXPERIENCE</h2>
        </div>

        <div className="mb-1">
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Instructor in DEPI (OCT 2020 – JAN 2021) — Teaching IT Courses on NodeJS, REST APIs, Databases, JS, ReactJS, Mobile/Web principles, HTML, CSS and others.</span>
          </div>
        </div>

        {/* Certifications Header */}
        <div className="border-b border-black py-1 mb-1">
          <h2 className="text-xl font-bold text-center">CERTIFICATIONS</h2>
        </div>

        <div className="">
          <div className="flex items-start justify-between">
            <div className="flex">
              <span className="mr-2 text-xl">•</span>
              <span>The Complete Node.js Course (RESTful Web Services with Node.js, Express, and MongoDB)</span>
            </div>
            <div className="font-bold">Nov 2020</div>
          </div>
          <div className="flex items-start justify-between">
            <div className="flex">
              <span className="mr-2 text-xl">•</span>
              <span>Database Fundamentals</span>
            </div>
            <div className="font-bold">Aug 2020</div>
          </div>
          <div className="flex items-start justify-between">
            <div className="flex">
              <span className="mr-2 text-xl">•</span>
              <span>Clean Code Certificate</span>
            </div>
            <div className="font-bold">JAN 2021</div>
          </div>
          <div className="flex items-start justify-between">
            <div className="flex">
              <span className="mr-2 text-xl">•</span>
              <span>Building Web Applications using MERN</span>
            </div>
            <div className="font-bold">May 2021</div>
          </div>
          <div className="flex items-start justify-between">
            <div className="flex">
              <span className="mr-2 text-xl">•</span>
              <span>ReactJS Certificate</span>
            </div>
            <div className="font-bold">DEC 2020</div>
          </div>
        </div>
        <div className="flex items-start p-2">
          <span className="mr-2 text-xl"> </span>
          <span> </span>
        </div>
        <div className="flex items-start p-2">
          <span className="mr-2 text-xl"> </span>
          <span> </span>
        </div>
        <div className="flex items-start p-2">
          <span className="mr-2 text-xl"> </span>
          <span> </span>
        </div>
        <div className="flex items-start p-2">
          <span className="mr-2 text-xl"> </span>
          <span> </span>
        </div>
        <div className="flex items-start p-2">
          <span className="mr-2 text-xl"> </span>
          <span> </span>
        </div>
        <div className="flex items-start p-2">
          <span className="mr-2 text-xl"> </span>
          <span> </span>
        </div>
        <div className="flex items-start p-2">
          <span className="mr-2 text-xl"> </span>
          <span> </span>
        </div>
        <div className="flex items-start p-2">
          <span className="mr-2 text-xl"> </span>
          <span> </span>
        </div>

        {/* Languages and Technologies Header */}
        <div className="border-b border-black mb-1 ">
          <h2 className="text-xl font-bold text-center">LANGUAGES AND TECHNOLOGIES</h2>
        </div>

        <div className="grid grid-cols-4 mb-1">
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>NodeJS</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Express</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>TypeScript</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>JavaScript</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>ReactJS</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>React Native</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Expo</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Redux</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>REST APIs</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Socket.io</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Event-Driven Architecture</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Performance Optimization</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>MongoDB</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>MSSQL</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>MySQL</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Design patterns</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>AWS</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Azure</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Cloudflare</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Docker</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>CI/CD Pipelines</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Linux</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Git</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Azure DevOps</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>iOS & Android</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Mobile UI/UX</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>TailwindCSS</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Bootstrap</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>HTML5 & CSS3</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Agile Methodology</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>OpenAI/AI Models</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>WhatsApp API</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Twilio</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Telnyx</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Payment Gateways</span>
          </div>
          <div className="flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Cross-Platform Apps</span>
          </div>
        </div>
      </div>
    </div>
  );
}