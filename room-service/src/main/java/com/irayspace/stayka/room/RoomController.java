package com.irayspace.stayka.room;

import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rooms")
public class RoomController {

  private final RoomService roomService;

  public RoomController(RoomService roomService) {
    this.roomService = roomService;
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Room postRoom(@RequestBody CreateRoom input) {
    return roomService.createRoom(input);
  }

  @GetMapping("/{id}")
  public Optional<Room> getRoomById(@PathVariable String id) {
    return roomService.getRoomById(id);
  }

  @PutMapping
  public Room putRoom(@RequestBody UpdateRoom input) {
    return roomService.updateRoom(input);
  }
}
