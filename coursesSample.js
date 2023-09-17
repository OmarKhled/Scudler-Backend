export const courses = [
  {
    courseName: "MATH002",
    body: [
      {
        sectionNumber: 1,
        lecture: {
          lectureName: "MATH002 Lecture - Section 1",
          professor: "Mohamed Wafa",
          online: true,
          slots: [
            {
              day: 2,
              slot: [0, 1],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "MATH002 - Tutorial 1A",
            tutorialPrefix: "1A",
            ta: "Mohamed farag",
            online: true,
            slots: [
              {
                day: 3,
                slot: [0, 1],
              },
            ],
          },
          {
            tutorialName: "MATH002 - Tutorial 1B",
            tutorialPrefix: "1B",
            ta: "Menna Mohamed",
            online: false,
            slots: [
              {
                day: 3,
                slot: [0, 1],
              },
            ],
          },
        ],
        labs: [],
      },
      {
        sectionNumber: 2,
        lecture: {
          lectureName: "MATH002 Lecture - Section 2",
          professor: "Mohamed Wafa",
          online: true,
          slots: [
            {
              day: 2,
              slot: [2, 3],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "MATH002 - Tutorial 2A",
            tutorialPrefix: "2A",
            ta: "Mohamed Farag",
            online: false,
            slots: [
              {
                day: 3,
                slot: [2, 3],
              },
            ],
          },
          {
            tutorialName: "MATH002 - Tutorial 2B",
            tutorialPrefix: "2B",
            ta: "Menna Mohamed",
            online: true,
            slots: [
              {
                day: 3,
                slot: [5, 6],
              },
            ],
          },
        ],
        labs: [],
      },
      {
        sectionNumber: 3,
        lecture: {
          lectureName: "MATH002 Lecture - Section 3",
          professor: "Mohamed Mamdouh",
          online: true,
          slots: [
            {
              day: 0,
              slot: [0, 1],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "MATH002 - Tutorial 3A",
            tutorialPrefix: "3A",
            ta: "Mohamed Farag",
            online: true,
            slots: [
              {
                day: 3,
                slot: [5, 6],
              },
            ],
          },
          {
            tutorialName: "MATH002 - Tutorial 3B",
            tutorialPrefix: "3B",
            ta: "Menna Farag",
            online: false,
            slots: [
              {
                day: 4,
                slot: [3, 4],
              },
            ],
          },
        ],
        labs: [],
      },
      {
        sectionNumber: 4,
        lecture: {
          lectureName: "MATH002 Lecture - Section 4",
          professor: "Mohamed Mamdouh",
          online: true,
          slots: [
            {
              day: 0,
              slot: [3, 4],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "MATH002 - Tutorial 4A",
            tutorialPrefix: "4A",
            ta: "Mohamed Farag",
            online: true,
            slots: [
              {
                day: 1,
                slot: [0, 1],
              },
            ],
          },
          {
            tutorialName: "MATH002 - Tutorial 4B",
            tutorialPrefix: "4B",
            ta: "Menna Mohamed",
            online: false,
            slots: [
              {
                day: 3,
                slot: [3, 4],
              },
            ],
          },
        ],
        labs: [],
      },
    ],
  },
  {
    courseName: "ENGL003",
    body: [
      {
        sectionNumber: 1,
        lecture: {
          lectureName: "ENGL003 Lecture - Section 1",
          professor: "Shierien",
          online: true,
          slots: [
            {
              day: 1,
              slot: [1],
            },
            {
              day: 0,
              slot: [0, 1],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 2,
        lecture: {
          lectureName: "ENGL003 Lecture - Section 2",
          professor: "Mariam",
          online: true,
          slots: [
            {
              day: 0,
              slot: [0, 1],
            },
            {
              day: 1,
              slot: [1],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 3,
        lecture: {
          lectureName: "ENGL003 Lecture - Section 3",
          professor: "Iman",
          online: true,
          slots: [
            {
              day: 0,
              slot: [2, 3],
            },
            {
              day: 1,
              slot: [1],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 4,
        lecture: {
          lectureName: "ENGL003 Lecture - Section 4",
          professor: "Adham",
          online: true,
          slots: [
            {
              day: 4,
              slot: [5],
            },
            {
              day: 2,
              slot: [5],
            },
            {
              day: 3,
              slot: [3],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 5,
        lecture: {
          lectureName: "ENGL003 Lecture - Section 5",
          professor: "Marwa",
          online: true,
          slots: [
            {
              day: 0,
              slot: [5],
            },
            {
              day: 4,
              slot: [0, 1],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 6,
        lecture: {
          lectureName: "ENGL003 Lecture - Section 6",
          professor: "Amany",
          online: true,
          slots: [
            {
              day: 1,
              slot: [2],
            },
            {
              day: 0,
              slot: [2, 3],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 7,
        lecture: {
          lectureName: "ENGL003 Lecture - Section 7",
          professor: "Omnia",
          online: true,
          slots: [
            {
              day: 0,
              slot: [2, 3],
            },
            {
              day: 3,
              slot: [5],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 8,
        lecture: {
          lectureName: "ENGL003 Lecture - Section 8",
          professor: "Asmaa ",
          online: true,
          slots: [
            {
              day: 1,
              slot: [3],
            },
            {
              day: 3,
              slot: [4, 5],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
    ],
  },
  {
    courseName: "PHYS002",
    body: [
      {
        sectionNumber: 1,
        lecture: {
          lectureName: "PHYS002 Lecture - Section 1",
          professor: "Yasser El-Batawy",
          online: true,
          slots: [
            {
              day: 0,
              slot: [4, 5],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "PHYS002 - Tutorial 1A",
            tutorialPrefix: "1A",
            ta: "Rawan Edris",
            online: true,
            slots: [
              {
                day: 1,
                slot: [2, 3],
              },
            ],
          },
          {
            tutorialName: "PHYS002 - Tutorial 1B",
            tutorialPrefix: "1B",
            ta: "Marwa El Badawy",
            online: false,
            slots: [
              {
                day: 0,
                slot: [0, 1],
              },
            ],
          },
        ],
        labs: [
          {
            labName: "PHYS002 - Lab 1A",
            labPrefix: "1A",
            ta: "Mohamed Ibrahim",
            online: false,
            slots: [
              {
                day: 4,
                slot: [4, 5],
              },
            ],
          },
          {
            labName: "PHYS002 - Lab 1B",
            labPrefix: "1B",
            ta: "Mohamed Ibrahim",
            online: false,
            slots: [
              {
                day: 4,
                slot: [0, 1],
              },
            ],
          },
        ],
      },
      {
        sectionNumber: 2,
        lecture: {
          lectureName: "PHYS002 Lecture - Section 2",
          professor: "Yasser El-Batawy",
          online: true,
          slots: [
            {
              day: 1,
              slot: [5, 6],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "PHYS002 - Tutorial 2A",
            tutorialPrefix: "2A",
            ta: "Rawan Edris",
            online: true,
            slots: [
              {
                day: 0,
                slot: [4, 5],
              },
            ],
          },
          {
            tutorialName: "PHYS002 - Tutorial 2B",
            tutorialPrefix: "2B",
            online: false,
            ta: "Rawan Edris",
            slots: [
              {
                day: 0,
                slot: [2, 3],
              },
            ],
          },
        ],
        labs: [
          {
            labName: "PHYS002 - Lab 2A",
            labPrefix: "2A",
            ta: "Mohamed Ibrahim",
            online: false,
            slots: [
              {
                day: 3,
                slot: [5, 6],
              },
            ],
          },
          {
            labName: "PHYS002 - Lab 2B",
            labPrefix: "2B",
            ta: "Mohamed Ibrahim",
            online: false,
            slots: [
              {
                day: 3,
                slot: [0, 1],
              },
            ],
          },
        ],
      },
      {
        sectionNumber: 3,
        lecture: {
          lectureName: "PHYS002 Lecture - Section 3",
          professor: "Amr Essawy",
          online: true,
          slots: [
            {
              day: 2,
              slot: [0, 1],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "PHYS002 - Tutorial 3A",
            tutorialPrefix: "3A",
            ta: "Marwa Mohamed",
            online: false,
            slots: [
              {
                day: 0,
                slot: [4, 5],
              },
            ],
          },
          {
            tutorialName: "PHYS002 - Tutorial 3B",
            tutorialPrefix: "3B",
            online: true,
            ta: "Rawan Edris",
            slots: [
              {
                day: 1,
                slot: [0, 1],
              },
            ],
          },
        ],
        labs: [
          {
            labName: "PHYS002 - Lab 3A",
            labPrefix: "3A",
            ta: "Mohamed Ibrahim",
            online: false,
            slots: [
              {
                day: 4,
                slot: [6, 7],
              },
            ],
          },
          {
            labName: "PHYS002 - Lab 3B",
            labPrefix: "3B",
            ta: "Mohamed Ibrahim",
            online: false,
            slots: [
              {
                day: 2,
                slot: [6, 7],
              },
            ],
          },
        ],
      },
      {
        sectionNumber: 4,
        lecture: {
          lectureName: "PHYS002 Lecture - Section 4",
          professor: "Amr Essawy",
          online: true,
          slots: [
            {
              day: 3,
              slot: [0, 1],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "PHYS002 - Tutorial 4A",
            tutorialPrefix: "4A",
            ta: "Amany Mostafa",
            slots: [
              {
                day: 0,
                slot: [0, 1],
              },
            ],
          },
          {
            tutorialName: "PHYS002 - Tutorial 4B",
            tutorialPrefix: "4B",
            ta: "Amany Mostafa",
            slots: [
              {
                day: 1,
                slot: [0, 1],
              },
            ],
          },
        ],
        labs: [
          {
            labName: "PHYS002 - Lab 4A",
            labPrefix: "4A",
            ta: "Mohamed Ibrahim",
            online: false,
            slots: [
              {
                day: 1,
                slot: [5, 6],
              },
            ],
          },
          {
            labName: "PHYS002 - Lab 4B",
            labPrefix: "4B",
            ta: "Mohamed Ibrahim",
            online: false,
            slots: [
              {
                day: 2,
                slot: [0, 1],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    courseName: "MENG101",
    body: [
      {
        sectionNumber: 1,
        lecture: {
          lectureName: "MENG101 Lecture - Section 1",
          professor: "Mohamed El-Shabrawy",
          online: true,
          slots: [
            {
              day: 2,
              slot: [2, 3],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "MENG101 - Tutorial 1A",
            tutorialPrefix: "1A",
            ta: "Bahaa Sultan",
            online: true,
            slots: [
              {
                day: 3,
                slot: [6],
              },
            ],
          },
          {
            tutorialName: "MENG101 - Tutorial 1B",
            tutorialPrefix: "1B",
            ta: "Bahaa Sultan",
            online: true,
            slots: [
              {
                day: 2,
                slot: [5],
              },
            ],
          },
        ],
        labs: [],
      },
      {
        sectionNumber: 2,
        lecture: {
          lectureName: "MENG101 Lecture - Section 2",
          professor: "Mohamed El-Shabrawy",
          online: true,
          slots: [
            {
              day: 2,
              slot: [5, 6],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "MENG101 - Tutorial 2A",
            tutorialPrefix: "2A",
            ta: "Bahaa Sultan",
            online: true,
            slots: [
              {
                day: 2,
                slot: [0],
              },
            ],
          },
          {
            tutorialName: "MENG101 - Tutorial 2B",
            tutorialPrefix: "2B",
            ta: "Bahaa Sultan",
            online: true,
            slots: [
              {
                day: 3,
                slot: [3],
              },
            ],
          },
        ],
        labs: [],
      },
      {
        sectionNumber: 3,
        lecture: {
          lectureName: "MENG101 Lecture - Section 3",
          professor: "Mohamed El-Shabrawy",
          online: true,
          slots: [
            {
              day: 1,
              slot: [5, 6],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "MENG101 - Tutorial 3A",
            tutorialPrefix: "3A",
            ta: "Bahaa Sultan",
            online: true,
            slots: [
              {
                day: 1,
                slot: [3],
              },
            ],
          },
          {
            tutorialName: "MENG101 - Tutorial 3B",
            tutorialPrefix: "3B",
            ta: "Bahaa Sultan",
            online: true,
            slots: [
              {
                day: 4,
                slot: [0],
              },
            ],
          },
        ],
        labs: [],
      },
      {
        sectionNumber: 4,
        lecture: {
          lectureName: "MENG101 Lecture - Section 4",
          professor: "Mohamed El-Shabrawy",
          online: true,
          slots: [
            {
              day: 2,
              slot: [0, 1],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "MENG101 - Tutorial 4A",
            tutorialPrefix: "4A",
            ta: "Bahaa Sultan",
            online: true,
            slots: [
              {
                day: 2,
                slot: [3],
              },
            ],
          },
          {
            tutorialName: "MENG101 - Tutorial 4B",
            tutorialPrefix: "4B",
            ta: "Bahaa Sultan",
            online: true,
            slots: [
              {
                day: 2,
                slot: [4],
              },
            ],
          },
        ],
        labs: [],
      },
    ],
  },
  {
    courseName: "ENGR002",
    body: [
      {
        sectionNumber: 1,
        lecture: {
          lectureName: "ENGR002 Lecture - Section 1",
          professor: "Mohamed Abd El Ghany",
          online: true,
          slots: [
            {
              day: 2,
              slot: [4],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "ENGR002 - Tutorial 1A",
            tutorialPrefix: "1A",
            ta: "Ahmed Hamdy",
            online: true,
            slots: [
              {
                day: 0,
                slot: [6],
              },
            ],
          },
        ],
        labs: [
          {
            labName: "ENGR002 - Lab 1A",
            labPrefix: "1A",
            ta: "Khaled Darwish",
            online: false,
            slots: [
              {
                day: 1,
                slot: [5, 6],
              },
            ],
          },
          {
            labName: "ENGR002 - Lab 1B",
            labPrefix: "1B",
            ta: "Khaled Darwish",
            online: false,
            slots: [
              {
                day: 0,
                slot: [0, 1],
              },
            ],
          },
        ],
      },
      {
        sectionNumber: 2,
        lecture: {
          lectureName: "ENGR002 Lecture - Section 2",
          professor: "Mohamed Abd El Ghany",
          online: true,
          slots: [
            {
              day: 2,
              slot: [7],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "ENGR002 - Tutorial 2A",
            tutorialPrefix: "2A",
            ta: "Ahmed Hamdy",
            online: true,
            slots: [
              {
                day: 4,
                slot: [0],
              },
            ],
          },
        ],
        labs: [
          {
            labName: "ENGR002 - Lab 2A",
            labPrefix: "2A",
            ta: "Khaled Darwish",
            online: false,
            slots: [
              {
                day: 1,
                slot: [2, 3],
              },
            ],
          },
        ],
      },
      {
        sectionNumber: 3,
        lecture: {
          lectureName: "ENGR002 Lecture - Section 3",
          professor: "Mohamed Abd El Ghany",
          online: true,
          slots: [
            {
              day: 1,
              slot: [2],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "ENGR002 - Tutorial 3A",
            tutorialPrefix: "3A",
            ta: "",
            online: true,
            slots: [
              {
                day: 4,
                slot: [1],
              },
            ],
          },
        ],
        labs: [
          {
            labName: "ENGR002 - Lab 3A",
            labPrefix: "3A",
            ta: "Khaled Darwish",
            online: false,
            slots: [
              {
                day: 2,
                slot: [5, 6],
              },
            ],
          },
          {
            labName: "ENGR002 - Lab 3B",
            labPrefix: "3B",
            ta: "Khaled Darwish",
            online: false,
            slots: [
              {
                day: 3,
                slot: [0, 1],
              },
            ],
          },
        ],
      },
      {
        sectionNumber: 4,
        lecture: {
          lectureName: "ENGR002 Lecture - Section 4",
          professor: "Mohamed Abd El Ghany",
          online: true,
          slots: [
            {
              day: 3,
              slot: [2],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "ENGR002 - Tutorial 4A",
            tutorialPrefix: "4A",
            ta: "Ahmed Hamdy",
            online: true,
            slots: [
              {
                day: 4,
                slot: [2],
              },
            ],
          },
        ],
        labs: [
          {
            labName: "ENGR002 - Lab 4A",
            labPrefix: "4A",
            ta: "Khaled Darwish",
            online: false,
            slots: [
              {
                day: 2,
                slot: [0, 1],
              },
            ],
          },
          {
            labName: "ENGR002 - Lab 4B",
            labPrefix: "4B",
            ta: "Khaled Darwish",
            online: false,
            slots: [
              {
                day: 2,
                slot: [2, 3],
              },
            ],
          },
        ],
      },
      {
        sectionNumber: 5,
        lecture: {
          lectureName: "ENGR002 Lecture - Section 5",
          professor: "Mohamed Abd El Ghany",
          online: true,
          slots: [
            {
              day: 2,
              slot: [2],
            },
          ],
        },
        tutorial: [
          {
            tutorialName: "ENGR002 - Tutorial 5A",
            tutorialPrefix: "5A",
            ta: "Ahmed Hamdy",
            online: true,
            slots: [
              {
                day: 4,
                slot: [3],
              },
            ],
          },
        ],
        labs: [
          {
            labName: "ENGR002 - Lab 5A",
            labPrefix: "5A",
            ta: "Khaled Darwish",
            online: false,
            slots: [
              {
                day: 3,
                slot: [2, 3],
              },
            ],
          },
          {
            labName: "ENGR002 - Lab 5B",
            labPrefix: "5B",
            ta: "Khaled Darwish",
            online: false,
            slots: [
              {
                day: 4,
                slot: [1, 2],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    courseName: "CSCE002",
    body: [
      {
        sectionNumber: 1,
        lecture: {
          lectureName: "CSCE002 Lecture - Section 1",
          professor: "Passent Mohamed",
          online: true,
          slots: [
            {
              day: 0,
              slot: [2, 3],
            },
          ],
        },
        tutorial: [],
        labs: [
          {
            labName: "CSCE002 - Lab 1A",
            labPrefix: "1A",
            ta: "Abd El Monem",
            online: false,
            slots: [
              {
                day: 4,
                slot: [0, 1, 2],
              },
            ],
          },
          {
            labName: "CSCE002 - Lab 1B",
            labPrefix: "1B",
            ta: "Abd El Monem",
            online: false,
            slots: [
              {
                day: 4,
                slot: [3, 4, 5],
              },
            ],
          },
        ],
      },
      {
        sectionNumber: 2,
        lecture: {
          lectureName: "CSCE002 Lecture - Section 2",
          professor: "Noha Mohamed",
          online: true,
          slots: [
            {
              day: 2,
              slot: [2, 3],
            },
          ],
        },
        tutorial: [],
        labs: [
          {
            labName: "CSCE002 - Lab 2A",
            labPrefix: "2A",
            ta: "Esraa El-Sayed",
            online: false,
            slots: [
              {
                day: 3,
                slot: [0, 1, 2],
              },
            ],
          },
          {
            labName: "CSCE002 - Lab 2B",
            labPrefix: "2B",
            ta: "Esraa El-Sayed",
            online: true,
            slots: [
              {
                day: 0,
                slot: [5, 6, 7],
              },
            ],
          },
        ],
      },
      {
        sectionNumber: 3,
        lecture: {
          lectureName: "CSCE002 Lecture - Section 3",
          professor: "Hossam El-Din",
          online: true,
          slots: [
            {
              day: 1,
              slot: [2, 3],
            },
          ],
        },
        tutorial: [],
        labs: [
          {
            labName: "CSCE002 - Lab 3A",
            labPrefix: "3A",
            ta: "Manar Mohamed",
            online: false,
            slots: [
              {
                day: 0,
                slot: [4, 5, 6],
              },
            ],
          },
          {
            labName: "CSCE002 - Lab 3B",
            labPrefix: "3B",
            ta: "Esraa El-Sayed",
            online: true,
            slots: [
              {
                day: 4,
                slot: [0, 1, 2],
              },
            ],
          },
        ],
      },
      {
        sectionNumber: 4,
        lecture: {
          lectureName: "CSCE002 Lecture - Section 4",
          professor: "Noha Mohamed",
          online: true,
          slots: [
            {
              day: 1,
              slot: [0, 1],
            },
          ],
        },
        tutorial: [],
        labs: [
          {
            labName: "CSCE002 - Lab 4A",
            labPrefix: "4A",
            ta: "Marwa Mohamed",
            online: true,
            slots: [
              {
                day: 4,
                slot: [5, 6, 7],
              },
            ],
          },
          {
            labName: "CSCE002 - Lab 4B",
            labPrefix: "4B",
            ta: "Manar Mohamed",
            online: false,
            slots: [
              {
                day: 3,
                slot: [5, 6, 7],
              },
            ],
          },
        ],
      },
      {
        sectionNumber: 5,
        lecture: {
          lectureName: "CSCE002 Lecture - Section 5",
          professor: "Passent Mohamed",
          online: false,
          slots: [
            {
              day: 3,
              slot: [0, 1],
            },
          ],
        },
        tutorial: [],
        labs: [
          {
            labName: "CSCE002 - Lab 5A",
            labPrefix: "5A",
            ta: "Abd El Monem",
            online: true,
            slots: [
              {
                day: 4,
                slot: [2, 3, 4],
              },
            ],
          },
          {
            labName: "CSCE002 - Lab 5B",
            labPrefix: "5B",
            ta: "Sief El Gably",
            online: false,
            slots: [
              {
                day: 1,
                slot: [4, 5, 6],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    courseName: "HUMA101",
    body: [
      {
        sectionNumber: 1,
        lecture: {
          lectureName: "HUMA101 Lecture - Section 1",
          professor: "Magdy Elias",
          online: true,
          slots: [
            {
              day: 2,
              slot: [0, 1, 2, 3],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 2,
        lecture: {
          lectureName: "HUMA101 Lecture - Section 2",
          professor: "Magdy Elias",
          online: true,
          slots: [
            {
              day: 2,
              slot: [2, 3],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 3,
        lecture: {
          lectureName: "HUMA101 Lecture - Section 3",
          professor: "Magdy Elias",
          online: true,
          slots: [
            {
              day: 2,
              slot: [4, 5],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 4,
        lecture: {
          lectureName: "HUMA101 Lecture - Section 4",
          professor: "Magdy Elias",
          online: true,
          slots: [
            {
              day: 4,
              slot: [6, 7],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
      {
        sectionNumber: 5,
        lecture: {
          lectureName: "HUMA101 Lecture - Section 5",
          professor: "Magdy Elias",
          online: true,
          slots: [
            {
              day: 0,
              slot: [5, 6],
            },
          ],
        },
        tutorial: [],
        labs: [],
      },
    ],
  },
];

export const schedule = [
  [
    [
      {
        name: "PHYS002 - Tutorial 1B",
        instructor: "Marwa El Badawy",
        type: "tutorial",
      },
    ],
    [
      {
        name: "PHYS002 - Tutorial 1B",
        instructor: "Marwa El Badawy",
        type: "tutorial",
      },
    ],
    [],
    [],
    [
      {
        name: "PHYS002 Lecture - Section 1",
        instructor: "Yasser El-Batawy",
        type: "lecture",
      },
    ],
    [
      {
        name: "PHYS002 Lecture - Section 1",
        instructor: "Yasser El-Batawy",
        type: "lecture",
      },
    ],
    [],
    [],
    [],
  ],
  [[], [], [], [], [], [], [], [], []],
  [
    [],
    [],
    [
      {
        name: "MATH002 Lecture - Section 2",
        instructor: "Mohamed Wafa",
        type: "lecture",
      },
    ],
    [
      {
        name: "MATH002 Lecture - Section 2",
        instructor: "Mohamed Wafa",
        type: "lecture",
      },
    ],
    [],
    [
      {
        name: "ENGL003 Lecture - Section 4",
        instructor: "Adham",
        type: "lecture",
      },
    ],
    [],
    [],
    [],
  ],
  [
    [],
    [],
    [],
    [
      {
        name: "ENGL003 Lecture - Section 4",
        instructor: "Adham",
        type: "lecture",
      },
    ],
    [],
    [
      {
        name: "MATH002 - Tutorial 2B",
        instructor: "Menna Mohamed",
        type: "tutorial",
      },
    ],
    [
      {
        name: "MATH002 - Tutorial 2B",
        instructor: "Menna Mohamed",
        type: "tutorial",
      },
    ],
    [],
    [],
  ],
  [
    [
      {
        name: "PHYS002 - Lab 1B",
        instructor: "Mohamed Ibrahim",
        type: "lab",
      },
    ],
    [
      {
        name: "PHYS002 - Lab 1B",
        instructor: "Mohamed Ibrahim",
        type: "lab",
      },
    ],
    [],
    [],
    [],
    [
      {
        name: "ENGL003 Lecture - Section 4",
        instructor: "Adham",
        type: "lecture",
      },
    ],
    [],
    [],
    [],
  ],
];
export const schedule2 = [
  [
    [
      {
        name: "PHYS002 - Tutorial 1B",
        instructor: "Marwa El Badawy",
        typa: "tutorial",
      },
    ],
    [
      {
        name: "PHYS002 - Tutorial 1B",
        instructor: "Marwa El Badawy",
        type: "tutorial",
      },
    ],
    [],
    [],
    [
      {
        name: "PHYS002 Lecture - Section 1",
        instructor: "Yasser El-Batawy",
        type: "lecture",
      },
    ],
    [
      {
        name: "PHYS002 Lecture - Section 1",
        instructor: "Yasser El-Batawy",
        type: "lecture",
      },
    ],
    [],
    [],
    [],
  ],
  [[], [], [], [], [], [], [], [], []],
  [
    [],
    [],
    [
      {
        name: "MATH002 Lecture - Section 2",
        instructor: "Mohamed Wafa",
        type: "lecture",
      },
    ],
    [
      {
        name: "MATH002 Lecture - Section 2",
        instructor: "Mohamed Wafa",
        type: "lecture",
      },
    ],
    [],
    [
      {
        name: "ENGL003 Lecture - Section 4",
        instructor: "Adham",
        type: "lecture",
      },
    ],
    [],
    [],
    [],
  ],
  [
    [],
    [],
    [],
    [
      {
        name: "ENGL003 Lecture - Section 4",
        instructor: "Adham",
        type: "lecture",
      },
    ],
    [],
    [
      {
        name: "MATH002 - Tutorial 2B",
        instructor: "Menna Mohamed",
        type: "tutorial",
      },
    ],
    [
      {
        name: "MATH002 - Tutorial 2B",
        instructor: "Menna Mohamed",
        type: "tutorial",
      },
    ],
    [],
    [],
  ],
  [
    [
      {
        name: "PHYS002 - Lab 1B",
        instructor: "Mohamed Ibrahim",
        type: "lab",
      },
    ],
    [
      {
        name: "PHYS002 - Lab 1B",
        instructor: "Mohamed Ibrahim",
        type: "lab",
      },
    ],
    [],
    [],
    [],
    [
      {
        name: "ENGL003 Lecture - Section 4",
        instructor: "Adham",
        type: "lecture",
      },
    ],
    [],
    [],
    [],
  ],
];
