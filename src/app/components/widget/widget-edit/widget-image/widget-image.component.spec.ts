import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgerImageComponent } from './widget-image.component';

describe('WidgerImageComponent', () => {
  let component: WidgerImageComponent;
  let fixture: ComponentFixture<WidgerImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgerImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
