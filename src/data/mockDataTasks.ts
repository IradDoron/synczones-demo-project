import { Task } from '@/types';

const mockDataTasks: Task[] = [
	{
		id: 1,
		title: 'Learn HTML Fundamentals',
		url: 'learn-html-fundamentals--1',
		taskType: 'Goal',
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
		priority: null,
	},
	{
		id: 2,
		title: 'Master HTML Forms',
		url: 'master-html-forms--2',
		taskType: 'Goal',
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
		priority: null,
	},
	{
		id: 3,
		title: 'Understand HTML Semantics',
		url: 'understand-html-semantics--3',
		taskType: 'Goal',
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
		priority: null,
	},
	{
		id: 4,
		title: 'Master HTML Tables',
		url: 'master-html-tables--4',
		taskType: 'Goal',
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
		priority: null,
	},
	{
		id: 5,
		title: 'Learn HTML Media Elements',
		url: 'learn-html-media-elements--5',
		taskType: 'Goal',
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
		priority: null,
	},
	{
		id: 6,
		title: 'Implement HTML5 Features',
		url: 'implement-html5-features--6',
		taskType: 'Goal',
		priority: null,

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
		url: 'optimize-for-seo--7',
		taskType: 'Goal',
		priority: null,
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
		url: 'practice-html-accessibility--8',
		taskType: 'Goal',
		priority: null,
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
		url: 'html-validation--9',
		taskType: 'Goal',
		priority: null,
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
		url: 'build-responsive-webpages--10',
		taskType: 'Goal',
		priority: null,
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
		url: 'advanced-html-forms--11',
		taskType: 'Goal',
		priority: null,
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
		url: 'html-email-markup--12',
		taskType: 'Goal',
		priority: null,
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
		url: 'html-and-css-frameworks--13',
		taskType: 'Goal',
		priority: null,
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
		url: 'html5-canvas-and-graphics--14',
		taskType: 'Goal',
		priority: null,
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
		url: 'web-performance-optimization--15',
		taskType: 'Goal',
		priority: null,
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
		url: 'web-accessibility-testing--16',
		taskType: 'Goal',
		priority: null,
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
		url: 'html-and-seo-optimization--17',
		taskType: 'Goal',
		priority: null,
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
		url: 'version-control-with-html--18',
		taskType: 'Goal',
		priority: null,
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
		url: 'cross-browser-compatibility--19',
		taskType: 'Goal',
		priority: null,
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
		url: 'html-best-practices-review--20',
		taskType: 'Goal',
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
		priority: null,
	},
	{
		id: 21,
		title: 'Learn the Next.js course',
		url: 'learn-the-nextjs-course--21',
		taskType: 'Learning Resource',
		description: 'Complete the Next.js course.',
		learningResourceId: 1,
		relatedGoalsIds: [3],
		status: 'In Progress',
		priority: null,
	},
	{
		id: 22,
		title: 'Pay Bituah to the car',
		url: 'pay-bituah-to-the-car--22',
		taskType: 'General',
		description: 'Pay Bituah to the car.',
		status: 'Not Started',
		taskSteps: [
			{
				id: 1,
				title: 'Call',
				description: 'Find the phone number and call them.',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'Pay',
				description: 'Pay them.',
				status: 'Not Started',
			},
			{
				id: 3,
				title: 'Save document',
				description: 'Save the document in google drive.',
				status: 'Not Started',
			},
		],
		priority: null,
	},
	{
		id: 23,
		title: 'לשלוח לשחר את ההקלטות',
		url: 'לשלוח-לשחר-את-ההקלטות--23',
		taskType: 'General',
		description: 'לשלוח לשחר את ההקלטות המלאות איפה שרואים את הפנים.',
		status: 'In Progress',
		priority: 'Highest',
		progress: 0,
		labels: ['Video Editing'],
		createDate: new Date(
			'Wed Sep 27 2023 14:37:24 GMT+0300 (Israel Daylight Time)'
		),
		startDate: new Date(
			'Wed Sep 27 2023 14:37:24 GMT+0300 (Israel Daylight Time)'
		),
		dueDate: new Date(
			'Wed Sep 27 2023 21:00:00 GMT+0300 (Israel Daylight Time)'
		),
		estimatedHours: 3,
		notes: 'לא לשכוח להוסיף את האודיו המתאים',
		workSessions: [
			{
				id: 1,
				taskId: 23,
				startTime: new Date(
					'Wed Sep 27 2023 14:37:24 GMT+0300 (Israel Daylight Time)'
				),
				endTime: null,
				duration: null,
			},
		],
	},
	{
		id: 24,
		title: '',
		url: '',
		taskType: 'General',
		description: '',
		taskSteps: [],
		status: 'Not Started',
		learningResourceId: 0,
		relatedGoalsIds: [],
		subTasksIds: [],
		attachments: [],
		labels: [],
		createDate: new Date(
			'Wed Sep 27 2023 16:26:01 GMT+0300 (Israel Daylight Time)'
		),
		startDate: new Date(
			'Wed Sep 27 2023 16:26:01 GMT+0300 (Israel Daylight Time)'
		),
		completedDate: null,
		dueDate: null,
		recurrence: {
			type: 'none',
		},
		dependencies: [],
		estimatedHours: 0,
		priority: 'Moderate',
		notes: '',
		progress: 0,
		workSessions: [],
	},
	{
		id: 25,
		title: 'לגלגל כביסה',
		url: 'לגלגל-כביסה--25',
		taskType: 'General',
		description: 'לקפל את הכביסה לתוך הארון',
		taskSteps: [
			{
				id: 1,
				title: 'לאסוף',
				description: 'לאסוף את הבגדים',
				status: 'Not Started',
			},
			{
				id: 2,
				title: 'לקפל',
				description: 'לקפל את הבגדים',
				status: 'Not Started',
			},
			{
				id: 3,
				title: 'למיין',
				description: 'למיין את הבגדים לארון',
				status: 'Not Started',
			},
		],
		status: 'Not Started',
		learningResourceId: 0,
		relatedGoalsIds: [],
		subTasksIds: [],
		attachments: [],
		labels: [],
		createDate: new Date(
			'Thu Sep 28 2023 16:52:08 GMT+0300 (Israel Daylight Time)'
		),
		startDate: new Date(
			'Thu Sep 28 2023 16:52:08 GMT+0300 (Israel Daylight Time)'
		),
		completedDate: null,
		dueDate: null,
		recurrence: {
			type: 'none',
		},
		dependencies: [],
		estimatedHours: 0,
		priority: 'High',
		notes: '',
		progress: 0,
		workSessions: [],
	},
	{
		id: 26,
		title: '',
		url: '',
		taskType: 'General',
		description: '',
		taskSteps: [],
		status: 'Not Started',
		learningResourceId: 0,
		relatedGoalsIds: [],
		subTasksIds: [],
		attachments: [],
		labels: [],
		createDate: '2023-09-28T18:58:23.113Z',
		startDate: null,
		completedDate: null,
		dueDate: null,
		recurrence: {
			type: 'none',
		},
		dependencies: [],
		estimatedHours: 0,
		priority: 'Moderate',
		notes: '',
		progress: 0,
		workSessions: [],
	},
	{
		id: 27,
		title: 'להשלים הרצאות על אילוסטרטור',
		url: 'להשלים-הרצאות-על-אילוסטרטור--27',
		taskType: 'General',
		description: 'ללמוד, לסכם ולתרגל את כל ההקלטות של שיעורי אילוסטרטור',
		taskSteps: [],
		status: 'Not Started',
		learningResourceId: 0,
		relatedGoalsIds: [],
		subTasksIds: [],
		attachments: [],
		labels: [],
		createDate: '2023-09-28T19:00:45.171Z',
		startDate: null,
		completedDate: null,
		dueDate: null,
		recurrence: {
			type: 'none',
		},
		dependencies: [],
		estimatedHours: 0,
		priority: 'Highest',
		notes: '',
		progress: 0,
		workSessions: [],
	},
];

export default mockDataTasks;
