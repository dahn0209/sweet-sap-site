import React from 'react'
import {
  fetchHomepageImages,
  deleteHomePageImageThunk
} from '../store/homePageImages'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './editHome.css'

export class EditHome extends React.Component {
  componentDidMount() {
    this.props.fetchHomePageImages()
  }

  // onDragEnd = result => {
  //   /////reordering Logic
  //   const {destination, source, draggableId} = result
  //   ///destination houses droppableID;
  //   ///source is where dragging happens; this has index;

  //   console.log('this is result=>', result)
  //   if (!destination) {
  //     console.log('deee no destionation here')
  //   }
  // }

  render() {
    const homePageImages = this.props.homePageImages
    if (!homePageImages.length) {
      return (
        <section>
          <div className="addNewButton">
            <Link to="/add-homepage-image">
              <button type="button">Add New Image </button>
            </Link>
          </div>
          <div id="noImagePresentEditHomeImages">
            <h1>No Images Present! Add New Images Now!</h1>
          </div>
        </section>
      )
    }
    // return (
    //   <DragDropContext onDragEnd={this.onDragEnd}>
    //     <section>
    //       <div className="addNewButton">
    //         <Link to="/add-homepage-image">
    //           <button type="button">Add New Image </button>
    //         </Link>
    //       </div>

    //       <Droppable droppableId="1">
    //         {provided => (
    //           <div
    //             {...provided.droppableProps}
    //             ref={provided.innerRef}
    //             className="editHomePageImagesContainer"
    //           >
    //             {homePageImages.map((homePageImage, index) => {
    //               if (!homePageImage.description) {
    //                 return (
    //                   <Draggable
    //                     key={homePageImage.id}
    //                     draggableId={String(homePageImage.id)}
    //                     index={index}
    //                   >
    //                     {provided => (
    //                       <div
    //                         ref={provided.innerRef}
    //                         {...provided.draggableProps}
    //                         {...provided.dragHandleProps}
    //                       >
    //                         <div
    //                           className="editHomePageImagesGridItem"
    //                           key={homePageImage.id}
    //                           id={homePageImage.id}
    //                         >
    //                           index:{index}; homePageImage.id:{homePageImage.id}
    //                           <img src={homePageImage.imageUrl} />
    //                           <div className="editHomePageImagesEditDelete">
    //                             <Link
    //                               to={`/homePageImages/${
    //                                 homePageImage.id
    //                               }/edit`}
    //                             >
    //                               <button type="button">Edit</button>
    //                             </Link>
    //                             <button
    //                               id="deleteBtn"
    //                               type="button"
    //                               onClick={() =>
    //                                 this.props.deleteHomePageImageThunk(
    //                                   homePageImage
    //                                 )
    //                               }
    //                             >
    //                               Delete
    //                             </button>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     )}
    //                   </Draggable>
    //                 )
    //               }
    //               return (
    //                 <Draggable
    //                   key={homePageImage.id}
    //                   draggableId={String(homePageImage.id)}
    //                   index={index}
    //                 >
    //                   {provided => (
    //                     <div
    //                       ref={provided.innerRef}
    //                       {...provided.draggableProps}
    //                       {...provided.dragHandleProps}
    //                     >
    //                       <div
    //                         className="editHomePageImagesGridItem"
    //                         key={homePageImage.id}
    //                         id={homePageImage.id}
    //                       >
    //                         index:{index}; homepageImage.id:{homePageImage.id}
    //                         <img src={homePageImage.imageUrl} />
    //                         <div className="editHomePageImagesDescription">
    //                           <span>{homePageImage.description}</span>
    //                         </div>
    //                         <div className="editHomePageImagesEditDelete">
    //                           <Link
    //                             to={`/homePageImages/${homePageImage.id}/edit`}
    //                           >
    //                             <button type="button">Edit</button>
    //                           </Link>
    //                           <button
    //                             type="button"
    //                             id="deleteBtn"
    //                             onClick={() =>
    //                               this.props.deleteHomePageImageThunk(
    //                                 homePageImage
    //                               )
    //                             }
    //                           >
    //                             Delete
    //                           </button>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   )}
    //                 </Draggable>
    //               )
    //             })}

    //             {provided.placeholder}
    //           </div>
    //         )}
    //       </Droppable>
    //     </section>
    //   </DragDropContext>
    // )
    return (
      <section>
        <div className="addNewButton">
          <Link to="/add-homepage-image">
            <button type="button">Add New Image </button>
          </Link>
        </div>
        <div className="editHomePageImagesContainer">
          {homePageImages.map(homePageImage => {
            if (!homePageImage.description) {
              return (
                <div
                  className="editHomePageImagesGridItem"
                  key={homePageImage.id}
                >
                  <img src={homePageImage.imageUrl} />
                  <div className="editHomePageImagesEditDelete">
                    <Link to={`/homePageImages/${homePageImage.id}/edit`}>
                      <button type="button">Edit</button>
                    </Link>
                    <button
                      id="deleteBtn"
                      type="button"
                      onClick={() =>
                        this.props.deleteHomePageImageThunk(homePageImage)
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            }
            return (
              <div
                className="editHomePageImagesGridItem"
                key={homePageImage.id}
              >
                <img src={homePageImage.imageUrl} />
                <div className="editHomePageImagesDescription">
                  <span>{homePageImage.description}</span>
                </div>
                <div className="editHomePageImagesEditDelete">
                  <Link to={`/homePageImages/${homePageImage.id}/edit`}>
                    <button type="button">Edit</button>
                  </Link>
                  <button
                    type="button"
                    id="deleteBtn"
                    onClick={() =>
                      this.props.deleteHomePageImageThunk(homePageImage)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    homePageImages: state.homePageImages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHomePageImages: () => dispatch(fetchHomepageImages()),
    deleteHomePageImageThunk: homePageImageId =>
      dispatch(deleteHomePageImageThunk(homePageImageId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHome)
