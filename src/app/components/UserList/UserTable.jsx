import Table from './table/Table'
import BookMark from './table/bookmark'

const UserTable = ({
                     users,
                     onToggleBookMark,
                     ...rest
                   }) => {
  const columns = {
    name: {
      path: "name",
      name: "Имя"
    },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => (
        <BookMark
          status={user.bookmark}
          onClick={() => onToggleBookMark(user._id)}
        />
      )
    }
  };
  return (
    <Table
      columns={columns}
      data={users}
    />
  );
};

export default UserTable;
