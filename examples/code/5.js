/* eslint no-undef: 0 */
if (violentDog) {
    data = PoundStore.get({});
    var roomId = data.rooms.getEmptyRoom();
    this.lockAway('forever', {windowCode:this.props.params.windowCode, roomId : roomId });
} else {
    data = AnimalShelterStore.get({ windowCode: this.props.params.windowCode, dogId : this.props.dogId});
    debugger;
    // Fill the admin form
    var advertisementProperties = this.state.dogProperties;
    newspaper.buildAdvert(advertisementProperties, this.saleData);
    kennels.makeLovingNest(advertisementProperties, this);

    this.setState({ upForAdoption: true, advertisement: advertisement});
}
