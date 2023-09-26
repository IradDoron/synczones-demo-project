import { Task } from '@/types';

const mockDataTasks: Task[] = [
	{
		id: 1,
		title: 'Learn HTML Fundamentals',
		description:
			'Study and understand the basic HTML elements, including headings, paragraphs, links, and lists.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Study Basic HTML Elements',
				description: 'Read documentation and tutorials on HTML basics.',
				status: 'In Progress',
			},
			{
				id: 2,
				title: 'Create Simple Webpage',
				description: 'Build a basic webpage using HTML elements.',
				status: 'Not Started',
			},
		],
		status: 'In Progress',
	},
	{
		id: 2,
		title: 'Master HTML Forms',
		description:
			'Explore HTML form elements like text inputs, radio buttons, and checkboxes.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Learn Form Elements',
				description: 'Study and understand HTML form elements.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Create User Registration Form',
				description:
					'Develop a functional user registration form using HTML forms.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 3,
		title: 'Understand HTML Semantics',
		description:
			'Learn semantic HTML elements (e.g., <header>, <nav>) and their significance.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Study Semantic Elements',
				description: 'Read about semantic HTML elements in documentation.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Rewrite Webpage Using Semantics',
				description:
					'Rewrite an existing webpage using semantic HTML elements.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 4,
		title: 'Master HTML Tables',
		description: 'Learn how to create and format tables using HTML.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Study Table Elements',
				description: 'Understand the <table>, <tr>, <th>, and <td> elements.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Create Data Table',
				description: 'Build a data table with proper structure and formatting.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 5,
		title: 'Learn HTML Media Elements',
		description:
			'Explore HTML media elements like <img> and <video> for multimedia content.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Study Media Elements',
				description: 'Familiarize yourself with <img> and <video> elements.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Embed Media Content',
				description: 'Embed images and videos into webpages.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 6,
		title: 'Implement HTML5 Features',
		description:
			'Learn and use HTML5 features like geolocation and local storage.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Study HTML5 Features',
				description: 'Research and understand HTML5 features.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Implement Geolocation',
				description: 'Incorporate geolocation functionality into a webpage.',
				status: 'Not Started',
			},
			{
				id: 3,
				title: 'Use Local Storage',
				description: 'Utilize local storage for client-side data storage.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 7,
		title: 'Optimize for SEO',
		description:
			'Learn how to use HTML elements to optimize webpages for search engines.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Study SEO Techniques',
				description: 'Explore on-page SEO techniques using HTML.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Implement Meta Tags',
				description: 'Add meta tags and descriptions to improve SEO.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 8,
		title: 'Practice HTML Accessibility',
		description:
			'Learn how to create web content that is accessible to all users.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Study Web Accessibility Guidelines',
				description:
					'Familiarize yourself with WCAG guidelines for accessibility.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Implement ARIA Roles',
				description: 'Add ARIA roles to HTML elements for accessibility.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 9,
		title: 'HTML Validation',
		description: 'Learn how to validate HTML code for standards compliance.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Use HTML Validators',
				description: 'Validate your HTML code using online validators.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Fix Validation Errors',
				description: 'Address any validation errors found in your code.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 10,
		title: 'Build Responsive Webpages',
		description:
			'Learn how to create webpages that adapt to different screen sizes.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Study Responsive Design Principles',
				description:
					'Learn about responsive design techniques with HTML and CSS.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Create Responsive Webpage',
				description:
					'Build a webpage that looks good on both desktop and mobile devices.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 11,
		title: 'Advanced HTML Forms',
		description:
			'Explore advanced HTML form features, such as form validation and custom styling.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Implement Form Validation',
				description:
					'Add JavaScript-based form validation to improve user input handling.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Customize Form Styling',
				description:
					'Learn CSS techniques for styling forms and create custom form designs.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 12,
		title: 'HTML Email Markup',
		description:
			'Learn how to create responsive and well-structured HTML emails.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Study Email HTML Guidelines',
				description: 'Research best practices for creating HTML emails.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Build Responsive Email Template',
				description:
					'Create an HTML email template that looks good on various email clients.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 13,
		title: 'HTML and CSS Frameworks',
		description:
			'Explore popular HTML and CSS frameworks like Bootstrap and Foundation.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Learn Bootstrap',
				description: 'Study the Bootstrap framework and its components.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Build a Bootstrap-Based Website',
				description: 'Create a website using Bootstrap for layout and styling.',
				status: 'Not Started',
			},
			{
				id: 3,
				title: 'Explore Other Frameworks',
				description:
					'Familiarize yourself with other CSS frameworks like Foundation or Bulma.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 14,
		title: 'HTML5 Canvas and Graphics',
		description:
			'Learn how to use HTML5 Canvas for dynamic graphics and animations.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Study HTML5 Canvas API',
				description: 'Understand the HTML5 Canvas API and its capabilities.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Create Interactive Canvas Project',
				description:
					'Build an interactive graphic or animation using HTML5 Canvas.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 15,
		title: 'Web Performance Optimization',
		description:
			'Learn techniques to optimize the performance of web pages built with HTML.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Optimize Images',
				description:
					'Apply image optimization techniques to reduce page load times.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Minify and Compress Resources',
				description:
					'Use tools to minify and compress HTML, CSS, and JavaScript files.',
				status: 'Not Started',
			},
			{
				id: 3,
				title: 'Implement Lazy Loading',
				description:
					'Add lazy loading for images and other assets to improve initial page load.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 16,
		title: 'Web Accessibility Testing',
		description:
			'Learn how to test and ensure web accessibility compliance in HTML code.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Use Accessibility Testing Tools',
				description: 'Explore and use tools for testing web accessibility.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Conduct Manual Testing',
				description:
					'Manually test your webpages for accessibility using keyboard navigation and screen readers.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 17,
		title: 'HTML and SEO Optimization',
		description:
			'Implement HTML practices to improve search engine optimization (SEO).',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Structured Data Markup',
				description:
					'Add structured data using Schema.org to enhance search results.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'XML Sitemap Generation',
				description:
					'Generate XML sitemaps to help search engines index your site.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 18,
		title: 'Version Control with HTML',
		description:
			'Learn version control concepts and apply them to HTML projects.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Git Basics',
				description: 'Learn the basics of Git version control.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Set Up a Git Repository',
				description: 'Create a Git repository for your HTML projects.',
				status: 'Not Started',
			},
			{
				id: 3,
				title: 'Collaborate on GitHub',
				description: 'Collaborate with others on GitHub using Git workflows.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 19,
		title: 'Cross-Browser Compatibility',
		description:
			'Test and ensure your HTML code works correctly on different web browsers.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Browser Testing Tools',
				description: 'Use browser developer tools for testing and debugging.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Cross-Browser Testing',
				description:
					'Test your webpages on multiple browsers and address compatibility issues.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
	{
		id: 20,
		title: 'HTML Best Practices Review',
		description:
			'Review and consolidate your knowledge of HTML best practices.',
		relatedGoalsIds: [4],
		taskSteps: [
			{
				id: 1,
				title: 'Self-Assessment',
				description: 'Assess your understanding of HTML best practices.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Document Your Knowledge',
				description: 'Create a document summarizing key HTML best practices.',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
	},
];

export default mockDataTasks;
