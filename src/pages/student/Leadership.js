import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'

import { getAllUsers, getLeaderboard } from '../../store/actions'

import { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

const Leadership = ({ currentTrack, leaderboard, users }) => {
  const dispatch = useDispatch()
  const [spinner, setSpinner] = useState(false)
  const [usersList, setUsers] = useState({})

  const getUser = (id) => {
    if (usersList[id]) {
      return usersList[id].full_name
    }
    return ''
  }

  useEffect(async () => {
    setSpinner(true)
    const returnedUsers = await dispatch(getAllUsers())
    const usersDict = {}
    returnedUsers.forEach(user => {
      usersDict[user.ID] = user
    })
    await setUsers(usersDict)
    await dispatch(getLeaderboard(currentTrack.ID))
    setSpinner(false)
  }, [])

  return (
    <Layout spinner={spinner} pageName='Sessions'>
        <PurpleBar title={`Leadership Board For ${currentTrack.name}`} button={false} />
        <div className="container p-5 table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th colSpan="2">Points</th>
                    </tr>
                </thead>
                <tbody>
                    { Object.keys(usersList).length
                      ? leaderboard.map((profile, index) => {
                        return (
                        <tr key={profile.ID}>
                            <td>{index + 1}</td>
                            <td>{getUser(profile.User_id)}</td>
                            <td>{profile.points}</td>
                        </tr>
                        )
                      })
                      : <></>}
                </tbody>
            </table>
        </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    currentTrack: state.currentTrack,
    leaderboard: state.leaderboard,
    users: state.users
  }
}

export default connect(mapStateToProps)(Leadership)
