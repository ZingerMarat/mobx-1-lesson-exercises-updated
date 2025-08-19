import React, { Component } from "react"
import { observer } from "mobx-react"

class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    const item = this.props.item
    const newLocation = window.prompt("Enter new location:", item.location)
    if (newLocation !== null && newLocation.trim() !== "") {
      this.props.store.editItem(item.name, newLocation)
    }
  }
  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name)
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox" value={item.name} onClick={this.checkItem} />
        {item.name + " " + item.location}
        <button className="editButton" onClick={this.editItem}>
          edit
        </button>
        <button className="deleteButton" onClick={this.deleteItem}>
          delete
        </button>
      </div>
    )
  }
}

export default observer(Item)
