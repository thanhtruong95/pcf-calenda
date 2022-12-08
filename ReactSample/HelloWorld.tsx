import * as React from 'react';
// import { Label } from '@fluentui/react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import {
	DatePicker,
	DayOfWeek,
	Dropdown,
	defaultDatePickerStrings,
	Stack,
	Text,
	ComboBox,
	IComboBoxOption,
} from '@fluentui/react';

import moment from 'moment';

moment.locale('en-GB');
const localizer = momentLocalizer(moment);

export interface IHelloWorldProps {
	name?: string;
}
const events = [
	{
		title: 'All Day Event very long title',
		allDay: true,
		start: new Date(2023, 3, 0),
		end: new Date(2023, 3, 1),
	},
	{
		title: 'Long Event',
		start: new Date(2023, 3, 7),
		end: new Date(2023, 3, 10),
	},

	{
		title: 'DTS STARTS',
		start: new Date(2016, 2, 13, 0, 0, 0),
		end: new Date(2016, 2, 20, 0, 0, 0),
	},

	{
		title: 'DTS ENDS',
		start: new Date(2016, 10, 6, 0, 0, 0),
		end: new Date(2016, 10, 13, 0, 0, 0),
	},

	{
		title: 'Some Event',
		start: new Date(2023, 3, 9, 0, 0, 0),
		end: new Date(2023, 3, 9, 0, 0, 0),
	},
	{
		title: 'Conference',
		start: new Date(2023, 3, 11),
		end: new Date(2023, 3, 13),
		desc: 'Big conference for important people',
	},
	{
		title: 'Meeting',
		start: new Date(2023, 3, 12, 10, 30, 0, 0),
		end: new Date(2023, 3, 12, 12, 30, 0, 0),
		desc: 'Pre-meeting meeting, to prepare for the meeting',
	},
	{
		title: 'Lunch',
		start: new Date(2023, 3, 12, 12, 0, 0, 0),
		end: new Date(2023, 3, 12, 13, 0, 0, 0),
		desc: 'Power lunch',
	},
	{
		title: 'Meeting',
		start: new Date(2023, 3, 12, 14, 0, 0, 0),
		end: new Date(2023, 3, 12, 15, 0, 0, 0),
	},
	{
		title: 'Happy Hour',
		start: new Date(2023, 3, 12, 17, 0, 0, 0),
		end: new Date(2023, 3, 12, 17, 30, 0, 0),
		desc: 'Most important meal of the day',
	},
	{
		title: 'Dinner',
		start: new Date(2023, 3, 12, 20, 0, 0, 0),
		end: new Date(2023, 3, 12, 21, 0, 0, 0),
	},
	{
		title: 'Birthday Party',
		start: new Date(2023, 3, 13, 7, 0, 0),
		end: new Date(2023, 3, 13, 10, 30, 0),
	},
	{
		title: 'Birthday Party 2',
		start: new Date(2023, 3, 13, 7, 0, 0),
		end: new Date(2023, 3, 13, 10, 30, 0),
	},
	{
		title: 'Birthday Party 3',
		start: new Date(2023, 3, 13, 7, 0, 0),
		end: new Date(2023, 3, 13, 10, 30, 0),
	},
	{
		title: 'Late Night Event',
		start: new Date(2023, 3, 17, 19, 30, 0),
		end: new Date(2023, 3, 18, 2, 0, 0),
	},
	{
		title: 'Multi-day Event',
		start: new Date(2023, 3, 20, 19, 30, 0),
		end: new Date(2023, 3, 22, 2, 0, 0),
	},
];

const options: IComboBoxOption[] = [
	{ key: 'A', text: 'Option A' },
	{ key: 'B', text: 'Option B' },
	{ key: 'C', text: 'Option C' },
	{ key: 'D', text: 'Option D' },
	{ key: 'E', text: 'Option E' },
	{ key: 'G', text: 'Option G' },
	{ key: 'H', text: 'Option H' },
	{ key: 'I', text: 'Option I' },
	{ key: 'J', text: 'Option J' },
];

export const HelloWorld: React.FC = () => {
	const [firstDayOfWeek] = React.useState(DayOfWeek.Sunday);

	return (
		<>
			<Text variant='xxLargePlus' nowrap block>
				Campaign Calender
			</Text>
			<form
				style={{
					display: 'flex',
					flexDirection: 'column',
					maxWidth: '480px',
				}}>
				<Stack style={{ textAlign: 'start' }} tokens={{ childrenGap: 10 }}>
					<Dropdown
						placeholder='Select an option'
						label='Filter by Campaign'
						options={options}
						// styles={dropdownStyles}
					/>
					<DatePicker
						firstDayOfWeek={firstDayOfWeek}
						placeholder='Select a date...'
						ariaLabel='Select a date'
						label='Start'
						// DatePicker uses English strings by default. For localized apps, you must override this prop.
						strings={defaultDatePickerStrings}
					/>
					<DatePicker
						firstDayOfWeek={firstDayOfWeek}
						placeholder='Select a date...'
						ariaLabel='Select a date'
						label='End'
						// DatePicker uses English strings by default. For localized apps, you must override this prop.
						strings={defaultDatePickerStrings}
					/>
					<Dropdown
						placeholder='Select an option'
						label='Filter By Comms Name'
						options={options}
						// styles={dropdownStyles}
					/>
					<ComboBox
						defaultSelectedKey='C'
						label='Filter By Comms Type'
						multiSelect
						options={options}
						// styles={comboBoxStyles}
					/>
				</Stack>
			</form>
			<br />
			<br />
			<Calendar
				localizer={localizer}
				events={events}
				startAccessor='start'
				endAccessor='end'
				views={{ month: true, week: true, day: true }}
			/>
		</>
	);
};
