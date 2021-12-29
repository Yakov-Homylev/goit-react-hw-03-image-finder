import React, { Component } from "react";
import fetchImage from "../../API/imageApi";
import Searchbar from "../Searchbar/Searchbar";
import ImageGalleryItem from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import { AppContainer } from "./App.styled";

class App extends Component {
  state = {
    images: [],
    searchWord: "",
    page: 1,
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      if (
        prevState.searchWord !== this.state.searchWord ||
        prevState.page !== this.state.page
      ) {
        console.log("hehee");

        const data = await fetchImage(this.state.searchWord, this.state.page);
        console.log(data);
        this.setState({
          images: [...this.state.images, ...data.hits],
        });
      }
    } catch (error) {
    } finally {
    }
  }

  onSumbitSearchWord = (e) => {
    e.preventDefault();

    this.setState({ searchWord: e.target.keyword.value });
  };

  loadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const isVisibleButton =
      this.state.images.length > 0 || this.state.images > 500;

    return (
      <AppContainer>
        <Searchbar onSumbit={this.onSumbitSearchWord} />
        <ImageGalleryItem images={this.state.images} />
        {this.state.isLoading && <Loader />}
        {isVisibleButton ? (
          <Button name="Загрузить еще" onClick={this.loadMore} />
        ) : null}
        <Loader />
      </AppContainer>
    );
  }
}

export default App;
