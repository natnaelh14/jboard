const jboardData = {
  companies: {
    "company-1": {
      id: "company-1",
      name: "Uber",
      position: "back-end developer",
    },
    "company-2": {
      id: "company-2",
      name: "Lyft ",
      position: "front-end developer",
    },
    "company-3": {
      id: "campany-3",
      name: "Google",
      position: "front-end developer",
    },
    "company-4": {
      id: "campany-4",
      name: "Apple",
      position: "back-end developer",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Applied",
      companyIds: ["company-1", "company-2", "company-3", "company-4"],
    },
    "column-2": {
      id: "column-2",
      title: "Priority",
      companyIds: ["company-1", "company-2", "company-3", "company-4"],
    },
    "column-3": {
      id: "column-3",
      title: "Offer",
      companyIds: ["company-1", "company-2", "company-3", "company-4"],
    },
  },
  columnOrder: ['column-1', "column-2", 'column-3'],
};

export default jboardData;
