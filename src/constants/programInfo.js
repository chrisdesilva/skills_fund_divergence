import logo from '../images/logo_divergence.png'; // add school logo to images folder and import here

export const applicationsLive = true; // set to false if not currently accepting applications
export const disabledLoanAppFormID = '69140c47-bb03-4a1b-b674-cc136fdea23d'; // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = 'October 29, 2019';

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
	// term details section
	interestRate36: '8.99%',
	interestRate60: '10.99%',
	APRRange36: '11.01 - 11.16%',
	APRRange60: '12.44 - 12.51%',
	interestOnly: [
		{
			// for multiple examples of interest only, add items to interestOnly array
			programName: 'the Cybersecurity Professional Penetration Tester program',
			APR36: '11.01%',
			financeCharge36: '$2,449.47',
			IOPayment36: '$77.91',
			FullMonthlyPayment36: '$330.67',
			APR60: '12.44%',
			financeCharge60: '$4,230.89',
			IOPayment60: '$95.25',
			FullMonthlyPayment60: '$226.07',
			LoanExampleAmt: '$10,000',
			LoanExampleOFeeAmt: '$400',
			LoanExampleAmtPlusOFee: '$10,400',
			programLength: '5' // program length in months
		},
		{
			// for multiple examples of interest only, add items to interestOnly array
			programName: 'the Data Science Immersive program',
			APR36: '11.16%',
			financeCharge36: '$2,293.64',
			IOPayment36: '$77.91',
			FullMonthlyPayment36: '$330.67',
			APR60: '12.51%',
			financeCharge60: '$4,040.39',
			IOPayment60: '$95.25',
			FullMonthlyPayment60: '$226.07',
			LoanExampleAmt: '$10,000',
			LoanExampleOFeeAmt: '$400',
			LoanExampleAmtPlusOFee: '$10,400',
			programLength: '3' // program length in months
		}
	],
	immediateRepayment: [
		{
			// for multiple examples of immmediate repayment, add items to immediateRepayment array
			programName: 'PROGRAM NAME',
			APR36: 'XX.XX%',
			financeCharge36: '$X,XXX.XX',
			FullMonthlyPayment36: '$XXX.XX',
			APR60: 'XX.XX%',
			financeCharge60: '$X,XXX.XX',
			FullMonthlyPayment60: '$XXX.XX',
			LoanExampleAmt: '$10,000',
			LoanExampleOFeeAmt: '$400',
			LoanExampleAmtPlusOFee: '$10,400'
		}
	]
};

export const faq = {
	// faq section
	costOfLiving: true, // true if at least one program has cost of living included
	costOfLivingPrograms: '', // leave as empty string is cost of living availability is the same across all programs
	multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
	interestOnly: true, // true if interest-only payments are an option
	immediateRepayment: false, // true if immediate repayment is an option
	multipleLoanLengths: true, // true if 36 and 60 month options are both available
	multipleLoanTypes: false, // true if both IR and IO are available
	multiPrograms: true, // only true if there are multiple programs
	onlinePrograms: false, // true if at least one program is remote/online
	schoolHQState: 'WA',
	origFee: 0.04,

	// interest payment FAQ info
	exampleLoanAmount: '$10,000',
	interestRate36: '8.99%',
	interestRate60: '10.99%',
	APR36: '11.01 - 11.16%',
	APR60: '12.44 - 12.51%',
	IOPayment36: '$77.91',
	IOPayment60: '$95.25',

	// max loan amounts by program for faq1
	loanRange: [
		{
			programName: 'the Cybersecurity Penetration Testing program',
			maxAmount: '$18,000',
			col: true,
			colAmount: '$4,500'
		},
		{
			programName: 'the Data Science Immersive program',
			maxAmount: '$17,000',
			col: true,
			colAmount: '$4,500'
		}
	]
};

// ***** END TERMS AND FAQ INFO *****

// ***** BEGIN GENERAL SCHOOL INFO *****

export const schoolLogo = logo; // go to header.js if height needs adjustment

export const schoolName = 'Divergence';

export const schoolURL = 'https://divergenceacademy.com/'; // update with url of school's website

export const skfURL = 'https://divergence.skills.fund'; // update with Skills Fund url

export const headline = 'Learn to Code at Divergence'; // update headline as appropriate

export const leadContent = {
	header: 'Your last step on the path toward changing your career',
	paragraph: `${schoolName} designs its programs to provide students a foundation for a career in data science or cyber security. ${schoolName} partners with Skills Fund to offer tuition${faq.costOfLiving
		? ' and cost of living'
		: ''} financing so more students like you can access their program.`
};

export const threeStepCardText = {
	step1: '',
	step2: {
		header: 'select your program',
		text: 'Choose between the Cybersecurity Penetration Testing and Data Science Immersive programs.'
	},
	step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`
};

export const netlifyFormName = 'divergence_contact';

export const GATracking = 'UA-68312423-1';

export const hubspotFormId = 'e3b19053-5d5f-4115-bd3e-0e77d32710f3'; // create Hubspot form, get form id after publishing

export const selectAProgram = 'select_a_divergence_program'; // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO *****

// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 10000;
export const placeholder = '$10,000';
export const interestRates = {
	ir36: 8.99,
	ir60: 10.99
};
export const moreThanSixPrograms = false; // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [
	// update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
	{
		name: 'Cyber Security',
		url: 'https://my.skills.fund/application?lenderCode=SKDVCP17',
		loanInfo: {
			// match loanInfo in first metro below
			maxLoanAmt: 22500,
			loanTerm36: true,
			loanTerm60: true,
			'0': {
				// interest-only
				k: 7,
				apr36: 11.01,
				apr60: 12.44
			},
			'1': null // immediate repayment
		},
		defaultLoanType: '0', // leave at 0 for interest-only, set to 1 for immediate repayment
		showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
		showLoanTypes: false, // true if both IR and IO are available
		locations: [ 'Metro 1', 'Metro 2', 'Metro 3' ],
		metros: [
			// list in same order as locations array above
			{
				location: 'Metro 1',
				loanInfo: {
					// // match loanInfo to Program 1 above
					maxLoanAmt: 22500,
					loanTerm36: true,
					loanTerm60: true,
					'0': {
						k: 7,
						apr36: 11.01,
						apr60: 12.44
					},
					'1': null
				}
			}
		]
	},
	{
		name: 'Data Science Immersive',
		url: 'https://my.skills.fund/application?lenderCode=SKDVDS17',
		loanInfo: {
			// match loanInfo in first metro below
			maxLoanAmt: 21500,
			loanTerm36: true,
			loanTerm60: true,
			'0': {
				k: 5,
				apr36: 11.16,
				apr60: 12.51
			},
			'1': null
		},
		defaultLoanType: '0', // leave at 0 for interest-only, set to 1 for immediate repayment
		showMetros: false,
		showLoanTypes: false,
		locations: [ 'Metro 1', 'Metro 2' ],
		metros: [
			{
				location: 'Metro 1',
				loanInfo: {
					// match loanInfo to Program 2 loanInfo above
					maxLoanAmt: 21500,
					loanTerm36: true,
					loanTerm60: true,
					'0': {
						k: 5,
						apr36: 11.16,
						apr60: 12.51
					},
					'1': null
				}
			}
		]
	}
];

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText =
	'Choose the loan amount that works best for you. Borrow up to $18,000 for Cyber Security Penetration Testing tuition and up to $4,500 for cost of living or up to $17,000 for Data Science Immersive tuition and up to $4,500 for cost of living.';

export const paymentTable = {
	headers: [ 'Program', 'Tuition', 'Cost of Living', 'Max Total' ],
	data: [
		{
			name: 'PROGRAM 1',
			tuition: '$13,495',
			col: '$6,000',
			max: '$19,495'
		},
		{
			name: 'PROGRAM 2',
			tuition: '$16,495',
			col: '$6,000',
			max: '$22,495'
		},
		{
			name: 'PROGRAM 3',
			tuition: '$13,495',
			col: '--',
			max: '$13,495'
		}
	],
	show: false
};

// ***** END LOAN CALC TEXT INFO *****

// ***** Snippets for Netlify *****

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

// before body Yotpo

// <script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/vDnpGV6DFy9oeKaj5UugzYG5TCeQ4gxgEVs9BO3n/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script>
