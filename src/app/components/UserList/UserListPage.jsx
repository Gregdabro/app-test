import UserTable from './UserTable'

const UsersListPage = () => {
  const users = [
    {
      _id: "67rdca3eeb7f6fgeed471815",
      name: "Джон Дориан",
      completedMeetings: 36,
      rate: 2.5,
      bookmark: false
    },
    {
      _id: "67rdca3eeb7f6fgeed471816",
      name: "Кокс",
      completedMeetings: 15,
      rate: 2.5,
      bookmark: false
    },
    {
      _id: "67rdca3eeb7f6fgeed471817",
      name: "Боб Келсо",
      completedMeetings: 247,
      rate: 3.5,
      bookmark: false
    },
    {
      _id: "67rdca3eeb7f6fgeed471818",
      name: "Рэйчел Грин",
      completedMeetings: 148,
      rate: 3.5,
      bookmark: false
    },
    {
      _id: "67rdca3eeb7f6fgeed471819",
      name: "Шелдон Купер",
      completedMeetings: 37,
      rate: 4.6,
      bookmark: false
    },
    {
      _id: "67rdca3eeb7f6fgeed471820",
      name: "Леонард Хофстедтер",
      completedMeetings: 147,
      rate: 3.5,
      bookmark: false
    },
    {
      _id: "67rdca3eeb7f6fgeed471821",
      name: "Говард Воловиц",
      completedMeetings: 72,
      rate: 3.5,
      bookmark: false
    },
    {
      _id: "67rdca3eeb7f6fgeed471822",
      name: "Никола Тесла",
      completedMeetings: 72,
      rate: 5,
      bookmark: false
    },
    {
      _id: "67rdca3eeb7f6fgeed471823",
      name: "Моника Геллер",
      completedMeetings: 17,
      rate: 4.5,
      bookmark: false
    },
    {
      _id: "67rdca3eeb7f6fgeed471824",
      name: "Рататуй",
      completedMeetings: 17,
      rate: 4.5,
      bookmark: false
    },
    {
      _id: "67rdca3eeb7f6fgeed47181f",
      name: "Джоуи Триббиани",
      completedMeetings: 434,
      rate: 3.5,
      bookmark: false
    },
    {
      _id: "67rdca3eeb7f6fgeed47181r",
      name: "Брэд Питт",
      completedMeetings: 434,
      rate: 5,
      bookmark: false
    }
  ];

  const handleToggleBookMark = (id) => {
    const newArray = users.map((user) => {
      if (user._id === id) {
        return { ...user, bookmark: !user.bookmark };
      }
      return user;
    });
    // setUsers(newArray);
    console.log(newArray);
  };

  return (
    <div className="d-flex">
      <div className="d-flex flex-column">
        <UserTable
          users={users}
          onToggleBookMark={handleToggleBookMark}
        />
      </div>
    </div>
  );
};
export default UsersListPage;
