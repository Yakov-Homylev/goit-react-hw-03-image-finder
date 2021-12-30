import React, { Component } from "react";
import fetchImage from "../../API/imageApi";
import Searchbar from "../Searchbar/Searchbar";
import ImageGalleryItem from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import { AppContainer, ErrorMessage } from "./App.styled";

class App extends Component {
  state = {
    images: [],
    searchWord: "",
    page: 1,
    isLoading: false,
    error: false,
    isVisibleModal: true,
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      if (
        prevState.searchWord !== this.state.searchWord ||
        prevState.page !== this.state.page
      ) {
        const data = await fetchImage(this.state.searchWord, this.state.page);
        console.log(data);
        if (data.hits.length === 0) {
          throw new Error("Что-то пошло не так");
        }
        this.setState({
          images: [...this.state.images, ...data.hits],
          error: false,
          isLoading: false,
        });
      }
    } catch (error) {
      console.log("hehehe");
      this.setState({
        error: true,
        isLoading: false,
      });
    } finally {
    }
  }

  onSumbitSearchWord = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value.trim();

    if (!keyword) {
      return;
    }

    this.setState({
      searchWord: keyword,
      images: [],
      isLoading: true,
    });
  };

  loadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { images, error, searchWord, isLoading, isVisibleModal } = this.state;
    const isVisibleButton = images.length > 0 && images.length <= 500;

    return (
      <AppContainer>
        <Searchbar onSumbit={this.onSumbitSearchWord} />
        <ImageGalleryItem images={images} />
        {this.state.isLoading && <Loader />}
        {isVisibleButton ? (
          <Button name="Загрузить еще" onClick={this.loadMore} />
        ) : null}
        {isLoading && <Loader />}
        {error && (
          <ErrorMessage>
            По вашему запросу {searchWord} ничего не найдено!
          </ErrorMessage>
        )}
        {isVisibleModal && <Modal options="123" />}
      </AppContainer>
    );
  }
}

export default App;
