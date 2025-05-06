import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="profile.jpg" alt="Maneesha Malish" className="profile-pic" />
        <h1>Maneesha Malish</h1>
        <p>Cloud Architect with a passion for designing scalable, secure, and efficient cloud solutions tailored to business needs.</p>
        <a href="https://www.linkedin.com/in/maneeshareddy-m-4aab0619b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <p>Email: maneesha@example.com</p>
      </header>

      <section>
        <h2>Experience</h2>
        <h3>Tata Consultancy Services, Hyderabad, India — 2023–2024</h3>
        <p><strong>Cloud Engineer</strong></p>
        <ul>
          <li>Worked with GCP and AWS, leveraging services like Compute Engine, Kubernetes Engine, RDS, and DynamoDB.</li>
          <li>Implemented infrastructure as code using Terraform and CloudFormation.</li>
          <li>Managed VPC, networking, load balancing, and security protocols.</li>
          <li>Applied Agile methodologies including Scrum and Kanban for project management.</li>
        </ul>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          <li><strong>Google Cloud Certified: Associate Cloud Engineer</strong> — Issued Mar 2023, Valid through Mar 2026</li>
          <li><strong>Kubernetes Operators Intermediate</strong> — Issued by IBM Cognitive Class, Apr 2025</li>
        </ul>
      </section>

      <section>
        <h2>Resume</h2>
        <a href="/Maneesha_Malish_Resume.pdf" target="_blank">Download Resume (PDF)</a>
      </section>


      <section>
        <h2>Skills</h2>
        <ul>
          <li><strong>Cloud Platforms:</strong> Proficient in deploying and managing applications across AWS, Azure, and Google Cloud Platform.</li>
          <li><strong>Infrastructure as Code (IaC):</strong> Automating infrastructure setup using Terraform and AWS CloudFormation.</li>
          <li><strong>Containerization:</strong> Building and deploying containerized apps using Docker; orchestrating them with Kubernetes.</li>
          <li><strong>Programming:</strong> Skilled in Python for scripting and automation, Java for backend systems, and Bash for shell scripting.</li>
          <li><strong>CI/CD:</strong> Streamlining deployments using Jenkins, GitHub Actions, and GitLab CI/CD pipelines.</li>
          <li><strong>Monitoring & Logging:</strong> Implementing observability solutions using Prometheus, Grafana, and the ELK Stack.</li>
          <li><strong>Security:</strong> Designing secure architectures using IAM roles, policies, VPCs, and encryption standards.</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Multi-Cloud Disaster Recovery Solution</h3>
            <p>Designed and implemented a robust disaster recovery plan spanning AWS and Azure, enabling automatic failover between cloud providers. Used DNS failover with Route 53 and Azure Traffic Manager to ensure uptime.</p>
          </li>
          <li>
            <h3>Serverless Web Application</h3>
            <p>Developed a full-stack serverless web application using AWS Lambda, API Gateway, and DynamoDB. This project demonstrated cost-efficiency, scalability, and performance with no server management.</p>
          </li>
          <li>
            <h3>Infrastructure Automation with Terraform</h3>
            <p>Created reusable Terraform modules to provision scalable cloud infrastructure, improving deployment speed and consistency. Integrated state management and modular practices for large teams.</p>
          </li>
          <li>
            <h3>Containerized Microservices Architecture</h3>
            <p>Architected a microservices-based solution using Docker and Kubernetes, including Helm charts for deployment and monitoring using Prometheus and Grafana. Focused on service discovery, scaling, and resilience.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <form className="contact-form">
          <label>Name:</label>
          <input type="text" placeholder="Your name" />
          <label>Email:</label>
          <input type="email" placeholder="Your email" />
          <label>Message:</label>
          <textarea placeholder="Your message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;