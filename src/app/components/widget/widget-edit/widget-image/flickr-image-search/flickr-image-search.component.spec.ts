import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickImageSearchComponent } from './flickr-image-search.component';

describe('FlickImageSearchComponent', () => {
  let component: FlickImageSearchComponent;
  let fixture: ComponentFixture<FlickImageSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickImageSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickImageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
