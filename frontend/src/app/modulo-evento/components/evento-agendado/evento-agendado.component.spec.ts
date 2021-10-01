import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoAgendadoComponent } from './evento-agendado.component';

describe('EventoAgendadoComponent', () => {
  let component: EventoAgendadoComponent;
  let fixture: ComponentFixture<EventoAgendadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoAgendadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoAgendadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
