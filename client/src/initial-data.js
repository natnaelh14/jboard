const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Square', position: 'Full Stack Developer' },
    'task-2': { id: 'task-2', content: 'Intuit', position: 'Full Stack Developer' },
    'task-3': { id: 'task-3', content: 'Salesforce', position: 'Full Stack Developer' },
    'task-4': { id: 'task-4', content: 'Apple', position: 'Full Stack Developer' },
    'task-5': { id: 'task-5', content: 'Microsoft', position: 'Full Stack Developer' },
    'task-6': { id: 'task-6', content: 'Amazon', position: 'Full Stack Developer' },
    'task-7': { id: 'task-7', content: 'Alphabet', position: 'Full Stack Developer' },
    'task-8': { id: 'task-8', content: 'Facebook', position: 'Full Stack Developer' },
    'task-9': { id: 'task-9', content: 'PayPal', position: 'Full Stack Developer' },
    'task-10': { id: 'task-10', content: 'Netflix', position: 'Full Stack Developer' },
    'task-11': { id: 'task-11', content: 'Comcast', position: 'Full Stack Developer' },
    'task-12': { id: 'task-12', content: 'Uber', position: 'Full Stack Developer' },
    'task-13': { id: 'task-13', content: 'Pinterest', position: 'Full Stack Developer' },
    'task-14': { id: 'task-14', content: 'Palantir', position: 'Full Stack Developer' },
    'task-15': { id: 'task-15', content: 'SpaceX', position: 'Full Stack Developer' },
    'task-16': { id: 'task-16', content: 'Magic Leap', position: 'Full Stack Developer' },
    'task-17': { id: 'task-17', content: 'OpenDoor', position: 'Full Stack Developer' },
    'task-18': { id: 'task-18', content: 'DoorDash', position: 'Full Stack Developer' },
    'task-19': { id: 'task-19', content: 'Airbnb', position: 'Full Stack Developer' },
    'task-20': { id: 'task-20', content: 'Lyft', position: 'Full Stack Developer' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'APPLIED',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'PRIORITY',
      taskIds: ['task-5', 'task-6', 'task-7', 'task-8'],
    },
    'column-3': {
      id: 'column-3',
      title: 'INTERVIEW',
      taskIds: ['task-9', 'task-10', 'task-11', 'task-12'],
    },
    'column-4': {
      id: 'column-4',
      title: 'OFFER',
      taskIds: ['task-13', 'task-14', 'task-15', 'task-16'],
    },
    'column-5': {
      id: 'column-5',
      title: 'INACTIVE',
      taskIds: ['task-17', 'task-18', 'task-19', 'task-20'],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
};

export default initialData;