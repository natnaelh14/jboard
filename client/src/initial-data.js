const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Square' },
    'task-2': { id: 'task-2', content: 'Intuit' },
    'task-3': { id: 'task-3', content: 'Salesforce' },
    'task-4': { id: 'task-4', content: 'Apple' },
    'task-5': { id: 'task-5', content: 'Microsoft' },
    'task-6': { id: 'task-6', content: 'Amazon' },
    'task-7': { id: 'task-7', content: 'Alphabet' },
    'task-8': { id: 'task-8', content: 'Facebook' },
    'task-9': { id: 'task-9', content: 'PayPal' },
    'task-10': { id: 'task-10', content: 'Netflix' },
    'task-11': { id: 'task-11', content: 'Comcast' },
    'task-12': { id: 'task-12', content: 'Uber' },
    'task-13': { id: 'task-13', content: 'Pinterest' },
    'task-14': { id: 'task-14', content: 'Palantir' },
    'task-15': { id: 'task-15', content: 'SpaceX' },
    'task-16': { id: 'task-16', content: 'Magic Leap' },
    'task-17': { id: 'task-17', content: 'OpenDoor' },
    'task-18': { id: 'task-18', content: 'DoorDash' },
    'task-19': { id: 'task-19', content: 'Airbnb' },
    'task-20': { id: 'task-20', content: 'Lyft' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Applied',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Priority',
      taskIds: ['task-5', 'task-6', 'task-7', 'task-8'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Interview',
      taskIds: ['task-9', 'task-10', 'task-11', 'task-12'],
    },
    'column-4': {
      id: 'column-4',
      title: 'Offer',
      taskIds: ['task-13', 'task-14', 'task-15', 'task-16'],
    },
    'column-5': {
      id: 'column-5',
      title: 'Inactive',
      taskIds: ['task-17', 'task-18', 'task-19', 'task-20'],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
};

export default initialData;